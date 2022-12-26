import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';
import { EyeFrameShapeType } from '@shared/components/frames/eye-frame-shape/EyeFrameShape';

export const styles = () => createStyles({
  root: {
    width: 60,
    height: 60,
    transition: 'all .3s',
    cursor: 'pointer',
    border: `3px solid transparent`,
    margin: '0 8px 8px 0',
    padding: 6
  },
  rootChecked: {
    borderColor: colors.primary.green
  },
  body: {
    width: 50,
    height: 50,
    transform: 'scale(.76) translate(-5px,-5px)',
    backgroundRepeat: 'no-repeat',
  },
  [EyeFrameShapeType.Frame0]: { backgroundPosition: '-525px -125px' },
  [EyeFrameShapeType.Frame1]: { backgroundPosition: '-525px -185px' },
  [EyeFrameShapeType.Frame2]: { backgroundPosition: '-245px -305px' },
  [EyeFrameShapeType.Frame3]: { backgroundPosition: '-305px -305px' },
  [EyeFrameShapeType.Frame4]: { backgroundPosition: '-365px -305px' },
  [EyeFrameShapeType.Frame5]: { backgroundPosition: '-425px -305px' },
  [EyeFrameShapeType.Frame6]: { backgroundPosition: '-485px -305px' },
  [EyeFrameShapeType.Frame7]: { backgroundPosition: '-5px -365px' },
  [EyeFrameShapeType.Frame8]: { backgroundPosition: '-65px -365px' },
  [EyeFrameShapeType.Frame10]: { backgroundPosition: '-405px -245px' },
  [EyeFrameShapeType.Frame11]: { backgroundPosition: '-465px -245px' },
  [EyeFrameShapeType.Frame12]: { backgroundPosition: '-525px -245px' },
  [EyeFrameShapeType.Frame13]: { backgroundPosition: '-5px -305px' },
  [EyeFrameShapeType.Frame14]: { backgroundPosition: '-65px -305px' },
  [EyeFrameShapeType.Frame16]: { backgroundPosition: '-185px -305px' },
})