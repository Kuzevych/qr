import { ComponentsProps } from '@core/theme/types/main';

export const initializeComponentsProps = (config?: ComponentsProps): ComponentsProps => {
  return {
    ...config,
    MuiChip: {
      size: 'small',
    },
    MuiButtonBase: {},
    MuiTabs: {
      variant: 'scrollable',
    }
  };
};