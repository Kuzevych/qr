import React from 'react';
import { Button, Card, Collapse, Typography } from '@material-ui/core';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import cx from 'classnames';
import GetAppIcon from '@material-ui/icons/GetApp';
import ImportExportIcon from '@material-ui/icons/ImportExport';

import { withStyles, WithStyles } from '@core/theme/utils/with-styles';
import { defaultColors } from '@core/theme/constants/colors';
import { getHTTPClient } from '@core/http-client';
import { ColorPicker } from '@shared/components/color-picker';
import { UrlForm } from '@shared/components/url-form';
import { Accordion, AccordionType } from '@shared/components/accordion';
import { RadioGroup } from '@shared/components/radio-group';
import { Flex } from '@shared/components/flex';
import { Checkbox } from '@shared/components/checkbox';
import { Select } from '@shared/components/select';
import { colorTypeOptions, gradientTypeOptions } from '@shared/constants/options';
import { downloadBase64, getBase64FromFile } from '@shared/utils/file';
import { initialQRCode } from '@shared/images/bl.in';
import { Loading } from '@shared/components/loading';
import { ShapeForm } from '@shared/components/shape-form';
import { BodyType } from '@shared/components/frames/body-shape';
import { EyeFrameShapeType } from '@shared/components/frames/eye-frame-shape';
import { EyeBallShapeType } from '@shared/components/frames/eye-ball-shape';
import { LogoType } from '@shared/components/frames/logo';
import { LogoCustomize } from '@shared/components/logo-customize';
import { Slider } from '@shared/components/slider';

import { styles } from './app.styles';

export interface AppProps extends WithStyles<typeof styles> {}

export const $http = getHTTPClient();

const App: React.FC<AppProps> = ({ classes }) => {
  const initialRef = React.useRef(true);
  const urlFieldRef = React.useRef<HTMLDivElement | null>(null);

  const [url, setUrl] = React.useState('https://');

  const [qr, setQr] = React.useState<string>('');

  const [size, setSize] = React.useState(10);

  const [loading, setLoading] = React.useState(false);

  const [urlError, setUrlError] = React.useState(false);
  const [colors, setColors] = React.useState({
    bgColor: defaultColors.white,
    eye1Color: defaultColors.black,
    eyeBall1Color: defaultColors.black,
    bodyColor: defaultColors.black,
    gradientColor1: defaultColors.black,
    gradientColor2: '#0277BD',
  });
  const [colorRadio, setColorRadio] = React.useState('single');
  const [gradientType, setGradientType] = React.useState('linear');
  const [customEyeColor, setCustomEyeColor] = React.useState<boolean>(false);

  //Body Shape
  const [body, setBody] = React.useState(BodyType.Square);

  //Eye Frame Shape
  const [eye, setEye] = React.useState(EyeFrameShapeType.Frame0);

  //Eye Ball Shape
  const [eyeBall, setEyeBall] = React.useState<EyeBallShapeType | undefined>(undefined);

  const [logo, setLogo] = React.useState<LogoType | string>('');

  const [downloadingFile, setDownloadingFile] = React.useState(false);

  const [logoMode, setLogoMode] = React.useState<string>('default');

  const [openedAccordion, setOpenedAccordion] = React.useState<AccordionType | undefined>(undefined);

  React.useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;

      return;
    }

    if (url) {
      getQrCode(false);
    }
  }, [
    colors.bgColor,
    colors.bodyColor,
    colors.eye1Color,
    colors.eyeBall1Color,
    colorRadio,
    colors.gradientColor1,
    colors.gradientColor2,
    gradientType,
    body,
    eye,
    eyeBall,
    url,
    customEyeColor,
    logo,
    logoMode,
    size,
  ]);

  const getQrCode = async (download: boolean, format?: 'png' | 'svg') => {
    if (!url || url == 'https://') {
      setUrlError(true);
      urlFieldRef.current?.scroll({ top: 0, behavior: 'smooth' });

      return;
    }

    download ? setDownloadingFile(true) : setLoading(true);

    const colorsConfig =
      colorRadio == 'single'
        ? {
            bodyColor: colors.bodyColor,
            gradientColor1: null,
            gradientColor2: null,
          }
        : {
            bodyColor: colors.bodyColor,
            gradientColor1: colors.gradientColor1,
            gradientColor2: colors.gradientColor2,
          };

    try {
      const { data } = await $http.post(
        `/qr/custom`,
        {
          data: url,
          size: size,
          file: format,
          download: download,
          config: {
            body: body,
            eye: eye,
            eyeBall: eyeBall || '',
            bgColor: colors.bgColor,
            gradientType: gradientType,
            eye1Color: colors.eye1Color,
            eye2Color: colors.eye1Color,
            eye3Color: colors.eye1Color,
            eyeBall1Color: colors.eyeBall1Color,
            eyeBall2Color: colors.eyeBall1Color,
            eyeBall3Color: colors.eyeBall1Color,
            gradientOnEyes: customEyeColor,
            logo: logo ? logo : '',
            logoMode: logoMode,
            ...colorsConfig,
          },
        },
        download ? {} : { responseType: 'blob' }
      );

      if (download && format) {
        await downloadBase64(data?.data as string, format);
        setDownloadingFile(false);
      } else {
        const image = await getBase64FromFile(data);

        setQr(image);
        setLoading(false);
      }
    } catch (e) {
      download ? setDownloadingFile(false) : setLoading(false);
    }
  };

  const handleUrlChange = (s: string) => {
    setUrl(s);

    if (s === 'https://') {
      return;
    }
    s && setUrlError(false);
  };
  const handleChangeColor = (type: string) => (color: string) => {
    setColors({
      ...colors,
      [type]: color,
    });
  };

  const handleChangeEye1Color = (color: string) => {
    setColors({
      ...colors,
      eye1Color: color,
    });
  };

  const handleChangeEyeBall1Color = (color: string) => {
    setColors({
      ...colors,
      eyeBall1Color: color,
    });
  };

  const handleRadioColorChange = (type: string) => {
    if (type === 'gradient') {
      setColors({
        ...colors,
        gradientColor1: colors.bodyColor,
      });
    }

    if (type === 'single') {
      setColors({
        ...colors,
        bodyColor: colors.gradientColor1,
      });
    }

    setColorRadio(type);
  };

  const handleSyncGradientColor = () => {
    let gradient1 = colors.gradientColor1;
    let gradient2 = colors.gradientColor2;

    setColors({
      ...colors,
      gradientColor1: gradient2,
      gradientColor2: gradient1,
    });
  };

  const handleGradientTypeChange = (e: React.ChangeEvent<any>, value: string) => {
    setGradientType(value);
  };

  const handleChangeCustomEyeColor = (checked: boolean) => {
    setCustomEyeColor(checked);

    if (!checked) {
      setColors({
        ...colors,
        eye1Color: defaultColors.black,
        eyeBall1Color: defaultColors.black,
      });
    }
  };

  const handleSwapEyeColor = () => {
    let eye = colors.eye1Color;
    let balEye = colors.eyeBall1Color;

    setColors({
      ...colors,
      eye1Color: balEye,
      eyeBall1Color: eye,
    });
  };

  const handleCopyEyeForeground = () => {
    if (colorRadio === 'single') {
      let bodyColor = colors.bodyColor;
      setColors({
        ...colors,
        eye1Color: bodyColor,
        eyeBall1Color: bodyColor,
      });

      return;
    }

    if (colorRadio === 'gradient') {
      let gradient1 = colors.gradientColor1;
      let gradient2 = colors.gradientColor2;

      setColors({
        ...colors,
        eye1Color: gradient1,
        eyeBall1Color: gradient2,
      });
    }
  };

  const handleDownloadFile = (format: 'png' | 'svg') => () => {
    getQrCode(true, format);
  };

  const handleChangeAccordion = (type: AccordionType) => {
    if (openedAccordion === type) {
      setOpenedAccordion(undefined);

      return;
    }

    setOpenedAccordion(type);
  };

  return (
    <Typography component="div" className={classes.root}>
      <Card classes={{ root: classes.card }}>
        <div className={classes.actionsSection} ref={urlFieldRef}>
          <UrlForm error={urlError} url={url} onUrlChange={handleUrlChange} />
          <Accordion
            type={AccordionType.Options}
            open={openedAccordion == AccordionType.Options}
            onChange={handleChangeAccordion}
            classes={{ root: classes.accordion }}
          >
            <Flex direction="column">
              <span className={classes.heading}>Color</span>
              <span className={classes.subHeading}>Foreground Color</span>
              <Flex alignItems="center">
                <RadioGroup value={colorRadio} options={colorTypeOptions} onChange={handleRadioColorChange} />
                <Checkbox
                  label="Custom Eye"
                  checked={customEyeColor}
                  onChange={handleChangeCustomEyeColor}
                  classes={{ root: classes.customEyeCheckbox }}
                />
              </Flex>

              {colorRadio === 'single' && (
                <ColorPicker
                  color={colors.bodyColor}
                  onColorChange={handleChangeColor('bodyColor')}
                  classes={{ root: cx(classes.picker, classes.bodyPicker) }}
                />
              )}
              {colorRadio === 'gradient' && (
                <Flex classes={{ root: classes.gradientContainer }} direction="column">
                  <Flex
                    alignItems="center"
                    wrap="nowrap"
                    justifyContent="space-between"
                    classes={{ root: classes.gradientWrapper }}
                  >
                    <ColorPicker
                      color={colors.gradientColor1}
                      onColorChange={handleChangeColor('gradientColor1')}
                      classes={{ root: classes.gradientPicker }}
                    />
                    <Button
                      variant="outlined"
                      color="default"
                      onClick={handleSyncGradientColor}
                      classes={{ root: classes.syncButton }}
                    >
                      <SyncAltIcon classes={{ root: classes.horizontalSyncIcon }} />
                      <ImportExportIcon classes={{ root: classes.verticalSyncIcon }} />
                    </Button>
                    <ColorPicker
                      color={colors.gradientColor2}
                      onColorChange={handleChangeColor('gradientColor2')}
                      classes={{ root: classes.gradientPicker }}
                    />
                  </Flex>
                  <Select
                    value={gradientType}
                    options={gradientTypeOptions}
                    onChange={handleGradientTypeChange}
                    classes={{ root: classes.gradientSelect }}
                  />
                </Flex>
              )}
              <Collapse in={customEyeColor} classes={{ wrapper: classes.customEyeWrapper }}>
                <div className={classes.eyeContainer}>
                  <span className={classes.subHeading}>Eye Color</span>
                  <Flex
                    alignItems="center"
                    wrap="nowrap"
                    justifyContent="space-between"
                    classes={{ root: classes.gradientWrapper }}
                  >
                    <ColorPicker
                      color={colors.eye1Color}
                      onColorChange={handleChangeEye1Color}
                      classes={{ root: classes.gradientPicker }}
                    />
                    <Button
                      variant="outlined"
                      color="default"
                      onClick={handleSwapEyeColor}
                      classes={{ root: classes.syncButton }}
                    >
                      <SyncAltIcon classes={{ root: classes.horizontalSyncIcon }} />
                      <ImportExportIcon classes={{ root: classes.verticalSyncIcon }} />
                    </Button>
                    <ColorPicker
                      color={colors.eyeBall1Color}
                      onColorChange={handleChangeEyeBall1Color}
                      classes={{ root: classes.gradientPicker }}
                    />
                  </Flex>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleCopyEyeForeground}
                    classes={{ root: classes.eyeContainerSyncButton }}
                  >
                    Copy Foreground
                  </Button>
                </div>
              </Collapse>
              <span className={classes.subHeading}>Background Color</span>
              <ColorPicker
                color={colors.bgColor}
                onColorChange={handleChangeColor('bgColor')}
                classes={{ root: classes.picker }}
              />
            </Flex>
          </Accordion>
          <Accordion
            type={AccordionType.Customise}
            open={openedAccordion == AccordionType.Customise}
            onChange={handleChangeAccordion}
            classes={{ root: classes.accordion }}
          >
            <ShapeForm
              classes={{ subHeading: classes.subHeading }}
              body={body}
              onBodyChange={setBody}
              eye={eye}
              onEyeChange={setEye}
              eyeBall={eyeBall}
              onEyeBallChange={setEyeBall}
            />
          </Accordion>
          <Accordion
            type={AccordionType.Logos}
            open={openedAccordion == AccordionType.Logos}
            onChange={handleChangeAccordion}
            classes={{ root: classes.accordion }}
          >
            <LogoCustomize logo={logo} onLogoChange={setLogo} logoMode={logoMode} onLogoModeChange={setLogoMode} />
          </Accordion>
        </div>
        <div className={classes.codeSection}>
          <div className={classes.qrCode}>
            <img src={qr || initialQRCode} alt="" className={classes.qrCodeImage} />
            {loading && <Loading absolute />}
          </div>
          <Slider value={size} onValueChange={setSize} />
          <Flex direction="row" wrap="nowrap" justifyContent="space-between">
            <Button
              disabled={downloadingFile}
              startIcon={<GetAppIcon />}
              variant="contained"
              color="primary"
              classes={{ root: cx(classes.downloadBtn, classes.downloadBtnPng), label: classes.downloadBtnLabel }}
              onClick={handleDownloadFile('png')}
            >
              Download PNG
            </Button>
            <Button
              disabled={downloadingFile}
              startIcon={<GetAppIcon />}
              variant="contained"
              color="primary"
              classes={{ root: classes.downloadBtn, label: classes.downloadBtnLabel }}
              onClick={handleDownloadFile('svg')}
            >
              Download SVG
            </Button>
          </Flex>
        </div>
      </Card>
    </Typography>
  );
};

export default withStyles(styles)(App);
