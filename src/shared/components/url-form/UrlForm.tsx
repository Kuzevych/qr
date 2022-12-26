import React from 'react';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';

import { styles } from './UrlForm.styles';
import { Flex } from '@shared/components/flex';
import { TextField } from '@shared/components/text-field';

export interface UrlFormProps extends WithStyles<typeof styles> {
  url: string;
  onUrlChange: (url: string) => void;
  error: boolean;
}

const UrlFormComponent: React.FC<UrlFormProps> = ({ classes, onUrlChange, url, error }) => {
  const [localUrl, setLocalUrl] = React.useState('https://');

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
    if (localUrl.startsWith('http')) {
      onUrlChange(localUrl);
    } else {
      onUrlChange(`https://${localUrl}`);
    }
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
      <div className={classes.line} />
    </Flex>
  );
};

export const UrlForm = withStyles(styles)(UrlFormComponent);
