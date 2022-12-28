import React from 'react';
import Switch from 'react-switch';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
// import { getExternalHTTPClient } from '@core/http-client';
import { Flex } from '@shared/components/flex';
import { TextField } from '@shared/components/text-field';
import { colors } from '@core/theme/constants/colors';
import { Dialog } from '@shared/components/dialog';
// @ts-ignore
import statImage from '@shared/images/statistics-modal.png';
import { signUpUrl } from './UrlForm.constants';

import { styles } from './UrlForm.styles';

export interface UrlFormProps extends WithStyles<typeof styles> {
  url: string;
  onUrlChange: (url: string) => void;
  error: boolean;
}

// const $http = getExternalHTTPClient();

const UrlFormComponent: React.FC<UrlFormProps> = ({ classes, onUrlChange, url, error }) => {
  const [localUrl, setLocalUrl] = React.useState('https://');
  const [dialogOpen, setDialogOpen] = React.useState(false);

  React.useEffect(() => {
    setLocalUrl(url);
  }, [url]);
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocalUrl(value);
  };

  const handleUrlBlur = () => {
    if (!localUrl) {
      onUrlChange(localUrl);

      return;
    }

    // $http.post(`links`, { url: localUrl });

    if (localUrl.startsWith('http')) {
      onUrlChange(localUrl);
    } else {
      onUrlChange(`https://${localUrl}`);
    }
  };

  const handleSwitch = () => {
    setDialogOpen(true);
  };

  const handleSighUp = () => {
    window.open(signUpUrl);
  };

  return (
    <Flex autoWidth={false} direction="column" className={classes.root}>
      <span className={classes.submitLabel}>Submit URL </span>
      <TextField
        fullWidth
        error={error}
        value={localUrl}
        onChange={handleUrlChange}
        onBlur={handleUrlBlur}
        placeholder={'https://'}
        classes={{ input: classes.textField }}
      />
      <span className={classes.addLabel}>Your QR code will open this URL.</span>
      <Flex alignItems="center" classes={{ root: classes.switch }}>
        <Switch checked={false} onChange={handleSwitch} onColor={colors.primary.green} />
        <span className={classes.switchLabel}>Statistics and Editability</span>
      </Flex>
      <div className={classes.line} />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <div className={classes.dialog}>
          <Flex direction="column" alignItems="center">
            <img className={classes.dialogImage} src={statImage} alt="" />
            <span className={classes.dialogLabel}>
              Find out which QR Code receives more scans and discover where your most valuable audience comes from.
            </span>
            <Button color="secondary" variant="contained" onClick={handleSighUp} classes={{ root: classes.signUpBtn }}>
              Free Sigh Up
            </Button>
          </Flex>
        </div>
      </Dialog>
    </Flex>
  );
};

export const UrlForm = withStyles(styles)(UrlFormComponent);
