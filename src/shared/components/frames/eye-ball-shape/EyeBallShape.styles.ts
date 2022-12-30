import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';
import { EyeBallShapeType } from './EyeBallShape';

export const styles = () =>
  createStyles({
    root: {
      width: 60,
      height: 60,
      transition: 'all .3s',
      cursor: 'default',
      border: `3px solid transparent`,
      margin: '0 8px 8px 0',
      padding: 6,
    },
    rootChecked: {
      borderColor: colors.primary.green,
    },
    body: {
      width: 50,
      height: 50,
      transform: 'scale(.76) translate(-5px,-5px)',
      backgroundRepeat: 'no-repeat',
    },
    [EyeBallShapeType.Ball0]: { backgroundPosition: '-5px -5px' },
    [EyeBallShapeType.Ball1]: { backgroundPosition: '-65px -5px' },
    [EyeBallShapeType.Ball2]: { backgroundPosition: '-185px -65px' },
    [EyeBallShapeType.Ball3]: { backgroundPosition: '-245px -65px' },
    [EyeBallShapeType.Ball5]: { backgroundPosition: '-365px -65px' },
    [EyeBallShapeType.Ball6]: { backgroundPosition: '-425px -65px' },
    [EyeBallShapeType.Ball7]: { backgroundPosition: '-485px -65px' },
    [EyeBallShapeType.Ball8]: { backgroundPosition: '-5px -125px' },
    [EyeBallShapeType.Ball10]: { backgroundPosition: '-125px -5px' },
    [EyeBallShapeType.Ball11]: { backgroundPosition: '-185px -5px' },
    [EyeBallShapeType.Ball12]: { backgroundPosition: '-245px -5px' },
    [EyeBallShapeType.Ball13]: { backgroundPosition: '-305px -5px' },
    [EyeBallShapeType.Ball14]: { backgroundPosition: '-365px -5px' },
    [EyeBallShapeType.Ball15]: { backgroundPosition: '-425px -5px' },
    [EyeBallShapeType.Ball16]: { backgroundPosition: '-485px -5px' },
    [EyeBallShapeType.Ball17]: { backgroundPosition: '-5px -65px' },
    [EyeBallShapeType.Ball18]: { backgroundPosition: '-65px -65px' },
    [EyeBallShapeType.Ball19]: { backgroundPosition: '-125px -65px' },
    disabledLine: {
      height: 5,
      width: '100%',
      position: 'absolute',
      backgroundColor: colors.primary.green,
      top: '45%',
    },
  });
