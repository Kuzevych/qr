import { alpha } from '@material-ui/core';
import { Overrides } from '@core/theme/types/main';
import { colors } from '@core/theme/constants/colors';

export const initializeSwitchOverrides = (config?: Overrides['MuiSwitch']): Overrides['MuiSwitch'] => {
  return {
    colorSecondary: {
      '&.Mui-checked': {
        color: colors.primary.green,
      },

      '&.Mui-checked + .MuiSwitch-track': {
        backgroundColor: alpha(colors.primary.green, 0.5),
      },
    },
    ...config,
  };
};
