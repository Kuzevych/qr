import { Overrides } from '@core/theme/types/main';

export const initializePaperOverrides = (config?: Overrides['MuiPaper']): Overrides['MuiPaper'] => {
  return {
    root: {},

    ...config,
  };
};
