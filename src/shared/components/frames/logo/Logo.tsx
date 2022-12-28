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
  Facebook = '4a99e729-78d0-4098-9740-7347c9c5245c',
  FacebookCircle = 'a84dd0f5-ca6c-476c-b08c-15289e2af5e5',
  TwitterCircle = 'd52aec2a-7019-4723-8d8c-fe0da7b55d2b',
  Youtube = 'f75c4d9e-7529-4295-ba8d-60a9d3c97ca3',
  YoutubeCircle = '8b6155c6-4e57-4055-bcc6-da78089f8aca',
  GooglePlusCircle = '23be8672-b455-41a1-88f3-4b8c3fcdc589',
  InstagramCircle = 'e9b45086-6ea6-4083-928a-8b62ba347f7f',
  LinkedinCircle = '2b351426-d472-4d76-aee7-e57e218054f0',
  XingCircle = 'dfd1e89c-a37a-4dcc-acf7-cbab75ce0c10',
  PinterestCircle = '82ef25b9-188a-4573-a9d7-8db470850aa3',
  VideoCircle = '6af68a84-5d5b-4ed8-848e-861f7e51ac3d',
  SoundCloudCircle = 'ac2de4b9-aa17-45d7-a547-84e34a0d3a73',
  VkCircle = '9bc1b36d-a439-4b8f-9d40-602c6c12956e',
  WhatsappCircle = '9b252578-f75c-403e-a391-1a5c7f99eae2',
  Appstore = '9f1da2e7-53ff-4c80-be00-9e06dade01ff',
  GooglePlay = '8e86e57c-20cd-4538-95db-7f1d7fc17e82',
  Gmail = '3da0af8a-e983-4b0d-ad39-21730311766c',
  CalendarCircle = '4f42ef0e-785e-4438-80eb-21352eed51ee',
  DocumentCircle = '709abc42-476b-408f-b7b3-3cbfb7d378e1',
  PhoneCircle = 'fda14b97-7eaf-44b3-9b99-5da8b24348ca',
  ShareCircle = '2c53581e-a32b-4343-9bef-81972cd77923',
  WifiCircle = 'e07cd535-a036-4b30-bf4d-99cf9b232521',
  Bitcoin = '67ab921c-7b9d-4103-b1df-a6b008dc997d',
}

const LogoComponent: React.FC<LogoProps> = ({ classes, type, checked, onChange }) => {
  return (
    <div className={cx(classes.root, { [classes.rootChecked as string]: checked })} onClick={() => onChange(type)}>
      <div className={cx(classes.body, classes[type])} style={{ backgroundImage: `url(${logos})` }}></div>
    </div>
  );
};

export const Logo = withStyles(styles)(LogoComponent);
