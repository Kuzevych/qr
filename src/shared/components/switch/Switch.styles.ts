import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    label: {
      margin: spacing(0, 3, 0, 0),
    },
  });
