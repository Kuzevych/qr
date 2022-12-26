import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';

export default ({}: Theme) =>
  createStyles({
    root: {},
    label: {
      userSelect: 'none',
    },
    radio: {
      padding: 0,
      marginLeft: 0,
      marginRight: 10,
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      backgroundColor: colors.white,
      color: colors.white,
      borderRadius: 10,
      lineHeight: 10,
      border: `1px solid ${colors.border}`,
    },
    iconChecked: {
      color: colors.green,
    },
    checked: {
      width: 8,
      height: 8,
      borderRadius: 10,
      backgroundColor: colors.green,
    },
    radioChecked: {},
  });
