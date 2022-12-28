import { PaletteOptions } from '@core/theme/types/main';
import { colors } from '../constants/colors';

export const initializePalette = (config?: PaletteOptions): PaletteOptions => {
  return {
    primary: {
      main: colors.primary.green,
    },
    secondary: {
      main: colors.secondary.blue,
    },
    ...config,
  };
};
