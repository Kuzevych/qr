import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';

export default ({ spacing }: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    label: {
      margin: spacing(5, 0, 2, 0),
    },
    formControl: {
      marginBottom: spacing(2),
    },
    formControlLabel: {
      fontSize: 14,
    },
    formControlLabelDisabled: {},
    radios: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 10,
    },
    errorText: {
      bottom: -spacing(3),
    },
    radioWrapper: {},
    additionalContent: {},
  });
