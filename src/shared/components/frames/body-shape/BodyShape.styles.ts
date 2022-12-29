import { createStyles } from '@core/theme/utils/create-styles';
import { BodyType } from './BodyShape';
import { colors } from '@core/theme/constants/colors';

export const styles = () =>
  createStyles({
    root: {
      width: 60,
      height: 60,
      transition: 'all .3s',
      cursor: 'pointer',
      border: `3px solid transparent`,
      margin: '0 8px 8px 0',
      padding: 6,
    },
    rootChecked: {
      borderColor: colors.primary.green,
    },
    rootDisabled: {
      cursor: 'default',
      pointerEvents: 'none',
      position: 'relative',
    },
    body: {
      width: 90,
      height: 80,
      transform: 'scale(.5) translate(-48px,-39px)',
      backgroundRepeat: 'no-repeat',
    },
    [BodyType.Square]: { backgroundPosition: '-505px -455px' },
    [BodyType.Mosaic]: { backgroundPosition: '-5px -455px' },
    [BodyType.Dot]: { backgroundPosition: '-105px -215px' },
    [BodyType.Circle]: { backgroundPosition: '-125px -125px' },
    [BodyType.CircleZebra]: { backgroundPosition: '-225px -125px' },
    [BodyType.CircleZebraVertical]: { backgroundPosition: '-325px -125px' },
    [BodyType.Circular]: { backgroundPosition: '-425px -125px' },
    [BodyType.EdgeCut]: { backgroundPosition: '-205px -215px' },
    [BodyType.EdgeCutSmooth]: { backgroundPosition: '-305px -215px' },
    [BodyType.Japanese]: { backgroundPosition: '-185px -365px' },
    [BodyType.Leaf]: { backgroundPosition: '-485px -365px' },
    [BodyType.Pointer]: { backgroundPosition: '-105px -455px' },
    [BodyType.PointerEdgeCut]: { backgroundPosition: '-205px -455px' },
    [BodyType.PointerIn]: { backgroundPosition: '-305px -455px' },
    [BodyType.PointerInSmooth]: { backgroundPosition: '-405px -455px' },
    [BodyType.PointerSmooth]: { backgroundPosition: '-545px -5px' },
    [BodyType.Round]: { backgroundPosition: '-585px -95px' },
    [BodyType.RoundedIn]: { backgroundPosition: '-585px -185px' },
    [BodyType.RoundedInSmooth]: { backgroundPosition: '-585px -275px' },
    [BodyType.RoundedPointed]: { backgroundPosition: '-585px -365px' },
    [BodyType.Star]: { backgroundPosition: '-5px -545px' },
    [BodyType.Diamond]: { backgroundPosition: '-5px -215px' },
    disabledLine: {
      height: 6,
      width: '100%',
      position: 'absolute',
      backgroundColor: colors.primary.green,
      top: '45%',
    },
  });
