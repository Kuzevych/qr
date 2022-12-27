import { Overrides } from '@core/theme/types/main';
import { colors } from '@core/theme/constants/colors';
import { alpha } from '@core/theme/utils/alpha';
export const initializeButtonOverrides = (config?: Overrides['MuiButton']): Overrides['MuiButton'] => {
  return {
    root: {
      textTransform: 'none',
      color: 'inherit',
      borderRadius: 4,

      '&.Mui-disabled .MuiButton-label': {
        color: 'inherit',
      },
      '&.Mui-disabled .MuiButton-label .MuiButton-startIcon': {
        color: 'inherit',
      },
      '&.Mui-disabled .MuiButton-label .MuiButton-startIcon svg': {
        color: 'inherit',
      },
      '&.Mui-disabled .MuiButton-label .MuiButton-endIcon': {
        color: 'inherit',
      },
      '&.Mui-disabled .MuiButton-label .MuiButton-endIcon svg': {
        color: 'inherit',
      },
    },
    label: {},
    textPrimary: {},
    containedPrimary: {
      backgroundColor: colors.primary.green,

      '&:hover': {
        backgroundColor: alpha(colors.primary.green, 0.7),
      },
    },
    containedSecondary: {
      backgroundColor: colors.secondary.blue,

      '&:hover': {
        backgroundColor: alpha(colors.secondary.blue, 0.7),
      },
    },
    containedSizeSmall: {},
    outlined: {},
    sizeSmall: {},
    outlinedSizeSmall: {},
    startIcon: {},
    iconSizeMedium: {
      '&> *:first-child': {},
    },
    ...config,
  };
};
