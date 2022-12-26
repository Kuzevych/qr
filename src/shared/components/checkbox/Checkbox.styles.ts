import { Theme } from '@core/theme/types/main';
import { colors } from '@core/theme/constants/colors';
import { createStyles } from '@core/theme/utils/create-styles';

export default ({ spacing }: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    rootIconOnly: {
      paddingRight: 0,
      marginRight: spacing(3),
    },
    rootColumn: {
      display: 'inline-flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: 14,
      userSelect: 'none',
    },
    labelError: {
      color: colors.red,
    },
    checkbox: {
      padding: '0 !important',
      marginRight: 4
    },
    checkboxChecked: {
      padding: '0 !important'
    },
    icon: {
      height: 18,
      width: 18,
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}`,
      borderRadius: 4,
    },
    iconChecked: {
      color: colors.green,
      fontSize: 18,
    },
    iconError: {
      borderColor: colors.red,
    },
  });
