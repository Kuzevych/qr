import React from 'react';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';

import { styles } from './EyeFrameShape.styles';
// @ts-ignore
import spritesheet from '@shared/images/spritesheet.png';

export interface EyeFrameShapeProps extends WithStyles<typeof styles> {
  checked: boolean;
  type: EyeFrameShapeType;
  disabled?: boolean;
  onChange: (type: EyeFrameShapeType) => void;
}

export enum EyeFrameShapeType {
  Frame0 = 'frame0',
  Frame1 = 'frame1',
  Frame2 = 'frame2',
  Frame3 = 'frame3',
  Frame4 = 'frame4',
  Frame5 = 'frame5',
  Frame6 = 'frame6',
  Frame7 = 'frame7',
  Frame8 = 'frame8',
  Frame10 = 'frame10',
  Frame11 = 'frame11',
  Frame12 = 'frame12',
  Frame13 = 'frame13',
  Frame14 = 'frame14',
  Frame16 = 'frame16',
}

const EyeFrameShapeComponent: React.FC<EyeFrameShapeProps> = ({ classes, checked, disabled, onChange, type }) => {
  return (
    <div
      className={cx(classes.root, { [classes.rootChecked]: checked }, { [classes.rootDisabled]: disabled })}
      onClick={!disabled ? () => onChange(type) : undefined}
    >
      <div className={cx(classes.body, classes[type])} style={{ backgroundImage: `url(${spritesheet})` }}>
        {disabled && <div className={classes.disabledLine} />}
      </div>
    </div>
  );
};

export const EyeFrameShape = withStyles(styles)(EyeFrameShapeComponent);
