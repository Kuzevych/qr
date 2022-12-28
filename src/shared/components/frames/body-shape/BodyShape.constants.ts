import { BodyType } from './BodyShape';

export const bodyTypeOptions = [
  { type: BodyType.Square },
  { type: BodyType.Mosaic },
  { type: BodyType.Circle },
  { type: BodyType.CircleZebra },
  { type: BodyType.CircleZebraVertical },
  { type: BodyType.Round },
  { type: BodyType.Dot, disabled: true },
  { type: BodyType.Circular, disabled: true },
  { type: BodyType.EdgeCut, disabled: true },
  { type: BodyType.EdgeCutSmooth, disabled: true },
  { type: BodyType.Japanese, disabled: true },
  { type: BodyType.Leaf, disabled: true },
  { type: BodyType.Pointer, disabled: true },
  { type: BodyType.PointerEdgeCut, disabled: true },
  { type: BodyType.PointerIn, disabled: true },
  { type: BodyType.PointerInSmooth, disabled: true },
  { type: BodyType.PointerSmooth, disabled: true },
  { type: BodyType.RoundedIn, disabled: true },
  { type: BodyType.RoundedInSmooth, disabled: true },
  { type: BodyType.RoundedPointed, disabled: true },
  { type: BodyType.Star, disabled: true },
  { type: BodyType.Diamond, disabled: true },
];
