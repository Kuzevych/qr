import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';

export const styles = ({ spacing }: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    rootFullWidth: {
      width: '100%',
    },
    input: {
      backgroundColor: colors.white,

      '&.Mui-disabled': {
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 0.5,
        pointerEvents: 'none',
        userSelect: 'none',
      },

      '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #e3ecf2',
      },

      '&:hover': {
        '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#e3ecf2',
        },
      },
    },
    medium: {},
    labelRoot: {
      fontSize: 14,
      marginBottom: spacing(2),
      color: colors.black,
    },
    label: {},
    errorText: {
      color: 'red',
      fontSize: 13,
    },
  });
};
