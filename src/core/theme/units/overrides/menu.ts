import { Overrides } from '@core/theme/types/main';

export const initializeMenuOverrides = (config?: Overrides['MuiMenu']): Overrides['MuiMenu'] => {
  return {
    paper: {
      borderRadius: 0
    },

    ...config,
  };
};
