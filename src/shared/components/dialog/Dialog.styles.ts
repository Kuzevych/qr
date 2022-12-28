import { createStyles } from '@core/theme/utils/create-styles';
import { Theme } from '@core/theme/types/main';
import { colors } from '@core/theme/constants/colors';

export const styles = ({ spacing, breakpoints }: Theme) => {
  return createStyles({
    root: {
      position: 'absolute',
      top: 30,
      width: 700,
      maxWidth: 700,

      [breakpoints.down('xs')]: {
        minWidth: 'auto',
        width: '100%',
      },
    },
    titleRoot: {
      borderBottom: `1px solid ${colors.neutral.grey}`,
      padding: 0,
    },
    title: {
      padding: spacing(3),
    },
    heading: {
      fontSize: 20,
      fontWeight: 500,
    },
    closeIcon: {
      color: colors.primary.main,
      padding: 0,
    },
  });
};
