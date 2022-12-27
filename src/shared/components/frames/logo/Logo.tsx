import React from 'react';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
// @ts-ignore
import logos from '@shared/images/spritesheet-logos.png';

import { styles } from './Logo.styles';

export interface LogoProps extends WithStyles<typeof styles> {
  type: LogoType;
  checked: boolean;
  onChange: (type: LogoType) => void;
}

export enum LogoType {
  Facebook = '#facebook',
  FacebookCircle = '#facebook-circle',
  TwitterCircle = '#twitter-circle',
  Youtube = '#youtube',
  YoutubeCircle = '#youtube-circle',
  GooglePlusCircle = '#googleplus-circle',
  InstagramCircle = '#instagram-circle',
  LinkedinCircle = '#linkedin-circle',
  XingCircle = '#xing-circle',
  PinterestCircle = '#pinterest-circle',
  VideoCircle = '#video-circle',
  SoundCloudCircle = '#soundcloud-circle',
  VkCircle = '#vk-circle',
  WhatsappCircle = '#whatsapp-circle',
  Appstore = '#appstore',
  GooglePlay = '#google-play',
  Gmail = '#gmail',
  CalendarCircle = '#calendar-circle',
  DocumentCircle = '#document-circle',
  PhoneCircle = '#phone-circle',
  ShareCircle = '#share-circle',
  WifiCircle = '#wifi-circle',
  Bitcoin = '#bitcoin',
}

const LogoComponent: React.FC<LogoProps> = ({ classes, type, checked, onChange }) => {
  return (
    <div className={cx(classes.root, { [classes.rootChecked as string]: checked })} onClick={() => onChange(type)}>
      <div className={cx(classes.body, classes[type])} style={{ backgroundImage: `url(${logos})` }}></div>
    </div>
  );
};

export const Logo = withStyles(styles)(LogoComponent);
