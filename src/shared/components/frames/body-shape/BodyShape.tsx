import React from 'react';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
// @ts-ignore
import spritesheet from '@shared/images/spritesheet.png'

import { styles } from './BodyShape.styles';

export interface SpriteSheetProp extends WithStyles<typeof styles> {
  type: BodyType;
  checked: boolean;
  onChange: (type: BodyType) => void;
}

export enum BodyType {
  Square = 'square',
  Mosaic = 'mosaic',
  Dot = 'dot',
  Circle = 'circle',
  CircleZebra = 'circle-zebra',
  CircleZebraVertical = 'circle-zebra-vertical',
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
  Round = 'round',
  RoundedIn = 'rounded-in',
  RoundedInSmooth = 'rounded-in-smooth',
  RoundedPointed = 'routed-pointed',
  Star = 'star',
  Diamond = 'diamond',
}

const BodyShapeComponent: React.FC<SpriteSheetProp> = ({ classes, type, checked, onChange }) => {
  return <div className={cx(classes.root, {[classes.rootChecked]: checked})} onClick={() => onChange(type)} >
    <div className={cx(classes.body, classes[type] )}  style={{ backgroundImage: `url(${spritesheet})` }}></div>
  </div>
}

export const BodyShape = withStyles(styles)(BodyShapeComponent);