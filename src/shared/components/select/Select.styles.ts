import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';

export function styles({}: Theme) {
  const sharedPadding = '8px 0 3px 0';

  return createStyles({
    root: {},
    rootNoBorder: {
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent !important',
      },

      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: `${colors.border} !important`,
      },

      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${colors.border} !important`,
      },
    },
    marginDenseRoot: {},
    select: {
      borderRadius: '0 !important',

      '&:hover': {
        '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.border,
        },
      },

      '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${colors.border} !important`,
      },
    },
    selectDisabled: {},
    value: {
      fontSize: 14,
      overflow: 'hidden',
      padding: sharedPadding,
      textAlign: 'left',
      textOverflow: 'ellipsis',
      width: '100%',
    },
    valueMultiple: {},
    muiSelectRoot: {
      borderRadius: 0
    },
    muiSelect: {
      '&.Mui-disabled': {
        backgroundColor: colors.border,
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
    muiIcon: {},
    muiOutlined: {
      alignItems: 'center',
      backgroundColor: colors.white,
      display: 'flex',
      height: 36,
      paddingBottom: 0,
      paddingTop: 0,

      '&.Mui-disabled': {
        backgroundColor: colors.border,
        borderColor: colors.border,
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
    muiMenu: {},
    menuItem: {
      fontSize: 14,
    },
    menuItemDisabled: {
      pointerEvents: 'none',
    },
    menuItemSelected: {
      color: colors.black,
    },
    placeholder: {
      color: colors.black,
      padding: sharedPadding,
    },
    placeholderDisabled: {
    },
  });
}
