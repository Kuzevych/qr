import { Overrides } from '@core/theme/types/main';

import { initializePaperOverrides } from './paper';
import { initializeMenuOverrides } from '@core/theme/units/overrides/menu';
import { initializeFormControlLabelOverrides } from './form-control-label';
import { initializeButtonOverrides } from '@core/theme/units/overrides/button';

export const initializeOverrides = (config?: Overrides): Overrides => {
  return {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'f3f7fa',
        },
        '#root': {
          height: '100%',
        },
      },
    },
    MuiPaper: initializePaperOverrides(config?.MuiPaper),
    MuiMenu: initializeMenuOverrides(config?.MuiMenu),
    MuiButton: initializeButtonOverrides(config?.MuiButton),
    MuiFormControlLabel: initializeFormControlLabelOverrides(config?.MuiFormControlLabel),
    ...config,
  };
};
