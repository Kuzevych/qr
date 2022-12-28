import React from 'react';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
// @ts-ignore
import spritesheet from '@shared/images/spritesheet.png';

import { styles } from './BodyShape.styles';

export interface SpriteSheetProp extends WithStyles<typeof styles> {
  type: BodyType;
  checked: boolean;
  disabled?: boolean;
  onChange: (type: BodyType) => void;
}

export enum BodyType {
  Mosaic = 'mosaic', //d
  Circle = 'circle', //d
  CircleZebra = 'circle-zebra', //d
  CircleZebraVertical = 'circle-zebra-vertical', //d
  Round = 'round', //d
  Square = 'square',
  Dot = 'dot',
  Circular = 'circular',
  EdgeCut = 'edge-cut',
  EdgeCutSmooth = 'edge-cut-smooth',
  Japanese = 'japanese',
  Leaf = 'leaf',
  Pointer = 'pointer',
  PointerEdgeCut = 'pointer-edge-cut',
  PointerIn = 'pointer-in',
  PointerInSmooth = 'pointer-in-smooth',
  PointerSmooth = 'pointer-smooth',
  RoundedIn = 'rounded-in',
  RoundedInSmooth = 'rounded-in-smooth',
  RoundedPointed = 'routed-pointed',
  Star = 'star',
  Diamond = 'diamond',
}

const BodyShapeComponent: React.FC<SpriteSheetProp> = ({ classes, type, checked, disabled, onChange }) => {
  return (
    <div
      className={cx(classes.root, { [classes.rootChecked]: checked }, { [classes.rootDisabled]: !!disabled })}
      onClick={!disabled ? () => onChange(type) : undefined}
    >
      <div className={cx(classes.body, classes[type])} style={{ backgroundImage: `url(${spritesheet})` }}></div>
    </div>
  );
};

export const BodyShape = withStyles(styles)(BodyShapeComponent);
