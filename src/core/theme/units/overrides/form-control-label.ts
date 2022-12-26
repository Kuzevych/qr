import { Overrides } from '@core/theme/types/main';

export const initializeFormControlLabelOverrides = (
  config?: Overrides['MuiFormControlLabel']
): Overrides['MuiFormControlLabel'] => {
  return {
    root: {
      margin: 0
    },
    ...config,
  };
};
