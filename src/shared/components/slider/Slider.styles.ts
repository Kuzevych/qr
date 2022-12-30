import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';
import { Theme } from '@core/theme/types/main';
export const styles = ({ breakpoints }: Theme) =>
  createStyles({
    index: {
      width: '100%',
      marginTop: 15,
    },
    root: {
      color: colors.primary.green,
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: colors.white,
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
    sliderLabels: {
      color: colors.primary.darkBlue,
      marginBottom: 14,
    },
    low: {
      flexShrink: 1,
      flexGrow: 0,
      fontSize: 12,
    },
    center: {
      textAlign: 'center',
      fontWeight: 700,
      flexGrow: 1,
      flexShrink: 0,
      fontSize: 13,
    },
    high: {
      flexShrink: 1,
      flexGrow: 0,
      fontSize: 12,
      textAlign: 'right',
    },
    [breakpoints.down('xs')]: {
      index: {
        padding: '0 6px',
      },
    },
  });
