import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';
import { alpha } from '@material-ui/core';
import { colors } from '@core/theme/constants/colors';

export function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    rootAbsolute: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 3,
      backgroundColor: alpha(colors.white, 0.5),
    },
    none: {
      margin: 0,
    },
    small: {
      margin: spacing(2),
    },
    normal: {
      margin: spacing(4),
    },
    big: {
      margin: spacing(6),
    },
    svg: {
      color: colors.primary.green,
    },
  });
}
