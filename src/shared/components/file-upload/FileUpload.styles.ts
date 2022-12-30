import { colors } from '@core/theme/constants/colors';
import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';

export default ({ transitions }: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
      outline: 'none',
      display: 'flex',
      background: colors.white,
      flexDirection: 'row',
      transition: `${transitions.duration.standard}s`,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 4,

      '&:hover': {
        borderColor: colors.border,
      },
    },
    uploadImage: {},
    rootDisabled: {
      opacity: 0.5,
      cursor: 'default',
    },
  });
