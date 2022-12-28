import React from 'react';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';

import { styles } from './EyeBallShape.styles';
// @ts-ignore
import spritesheet from '@shared/images/spritesheet.png';

export interface EyeBallShapeProps extends WithStyles<typeof styles> {
  checked: boolean;
  type?: EyeBallShapeType;
  onChange: (type: EyeBallShapeType) => void;
}

export enum EyeBallShapeType {
  Ball0 = 'ball0',
  Ball1 = 'ball1',
  Ball2 = 'ball2',
  Ball3 = 'ball3',
  Ball5 = 'ball5',
  Ball6 = 'ball6',
  Ball7 = 'ball7',
  Ball8 = 'ball8',
  Ball10 = 'ball10',
  Ball11 = 'ball11',
  Ball12 = 'ball12',
  Ball13 = 'ball13',
  Ball14 = 'ball14',
  Ball15 = 'ball15',
  Ball16 = 'ball16',
  Ball17 = 'ball17',
  Ball18 = 'ball18',
  Ball19 = 'ball19',
}

const EyeBallShapeComponent: React.FC<EyeBallShapeProps> = ({ classes, checked, type }) => {
  return (
    <div
      className={cx(classes.root, { [classes.rootChecked]: checked })}
      // onClick={type ? () => onChange(type) : undefined}
    >
      <div
        className={cx(classes.body, type ? classes[type] : '')}
        style={{ backgroundImage: `url(${spritesheet})` }}
      ></div>
    </div>
  );
};

export const EyeBallShape = withStyles(styles)(EyeBallShapeComponent);
