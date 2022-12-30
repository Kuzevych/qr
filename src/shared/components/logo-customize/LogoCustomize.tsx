import React from 'react';
import { Button } from '@material-ui/core';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
import { FileUpload } from '@shared/components/file-upload';
import { Flex } from '@shared/components/flex';
import { Logo, LogoType } from '@shared/components/frames/logo';
import { getHTTPClient } from '@core/http-client';
import { Switch } from '@shared/components/switch';
import { getBase64FromFile } from '@shared/utils/file';
import { Loading } from '@shared/components/loading';
import { defaultLogoSrc } from './LogoCustomize.utils';

import { styles } from './LogoCustomize.styles';

export interface LogoCustomizeProps extends WithStyles<typeof styles> {
  logo: LogoType | string;
  onLogoChange: (logo: LogoType | string) => void;
  logoMode: string;
  onLogoModeChange: (mode: string) => void;
}

const $http = getHTTPClient();
const LogoCustomizeComponent: React.FC<LogoCustomizeProps> = ({
  classes,
  logo,
  onLogoChange,
  logoMode,
  onLogoModeChange,
}) => {
  const [file, setFile] = React.useState<string | undefined>(undefined);
  const [fileLoading, setFileLoading] = React.useState(false);

  const handleChangeLogo = (logoType: LogoType) => {
    onLogoChange(logoType);
    setFile(defaultLogoSrc(logoType));
  };

  const renderLogos = React.useMemo(() => {
    return (Object.keys(LogoType) as (keyof typeof LogoType)[]).map((el, idx) => (
      <Logo type={LogoType[el]} checked={logo == LogoType[el]} onChange={handleChangeLogo} key={idx} />
    ));
  }, [logo, onLogoModeChange, handleChangeLogo]);

  const handleUploadFile = async (files: File[] | File) => {
    setFileLoading(true);
    const uploadImage = Array.isArray(files) ? files[0] : files;

    if (uploadImage) {
      const src = await getBase64FromFile(uploadImage);
      setFile(src);

      let bodyFormData = new FormData();

      bodyFormData.append('file', uploadImage as File);

      const { data } = await $http.post(`/qr/uploadImage`, bodyFormData, {
        headers: {
          'Content-Type': `multipart/form-data`,
        },
      });

      if (data?.file) {
        setFileLoading(false);
        onLogoChange(data.file as string);
      }
    }
  };

  const handleRemoveLogo = () => {
    setFile(undefined);
    onLogoChange('');
  };

  const handleChangeLogoMode = () => {
    onLogoModeChange(logoMode == 'default' ? 'clear' : 'default');
  };

  return (
    <div className={classes.root}>
      <span className={classes.subHeading}>Upload Logo</span>
      <Flex classes={{ root: classes.uploadContainer }}>
        <Flex direction="column">
          <FileUpload
            config={{
              maxSize: 2097152,
              accept: ['image/png', 'image/jpeg'],
              multiple: false,
            }}
            onUpload={handleUploadFile}
            classes={{ root: classes.fileUpload }}
          />
          {file && (
            <Button variant="outlined" onClick={handleRemoveLogo}>
              Remove Logo
            </Button>
          )}
        </Flex>

        <div className={cx(classes.imageContainer, { [classes.imageContainerVisible]: fileLoading || !!file })}>
          {fileLoading && <Loading absolute />}
          {file && <img className={classes.image} src={file} alt="" />}
        </div>
      </Flex>
      <Switch
        label="Remove background behind Logo"
        switchProps={{
          checked: logoMode == 'clear',
          onChange: handleChangeLogoMode,
          classes: {
            root: classes.switch,
          },
        }}
        classes={{ label: classes.switchLabel }}
      />
      <span className={classes.subHeading}>Or choose from here</span>
      <Flex classes={{ root: classes.logos }}>{renderLogos}</Flex>
    </div>
  );
};

export const LogoCustomize = withStyles(styles)(LogoCustomizeComponent);
