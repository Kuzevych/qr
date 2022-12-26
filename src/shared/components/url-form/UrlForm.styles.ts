import { colors } from '@core/theme/constants/colors';
import { createStyles } from '@core/theme/utils/create-styles';

export const styles = () =>
  createStyles({
    root: {},
    submitLabel: {
      color: '#2a354f',
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 10,
    },
    textField: {
      boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 30px!important',
    },
    addLabel: {
      fontSize: 13,
      marginTop: 12,
      color: '#869ab8',
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: colors.border,
      marginTop: 20,
      marginBottom: 20,
    },
  });
