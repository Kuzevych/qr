import { ShapeOptions } from '@core/theme/types/main';

export const defaultShape: ShapeOptions = {
  borderRadius: 8
};

export const customBorderRadius = {
  primary: 30,
}

export const initializeShape = (config?: ShapeOptions): ShapeOptions => {
  return {
    borderRadius: defaultShape.borderRadius,
    ...config
  };
};