import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from "@core/theme/constants/colors";

export const styles = ({ shape }: Theme) =>
  createStyles({
    root: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      border: `1px solid #e3ecf2`,
    },
    heading: {
      padding: 16,
      borderTopLeftRadius: shape.borderRadius,
      borderTopRightRadius: shape.borderRadius,
      cursor: 'pointer',

      '&:hover': {
        '& $headerIcon': {
          color: colors.primary.green,
        },

        '& $headerText': {
          color: colors.primary.green,
        },

        '& $headerOpenIcon': {
          color: colors.primary.green,
        },
      },
    },
    headingContainer: {},
    headingContainerOpened: {
      '& $headerIcon': {
        color: colors.primary.green,
      },

      '& $headerText': {
        color: colors.primary.green,
      },

      '& $headerOpenIconOpened': {
        color: colors.primary.green,
      },
    },
    headerIcon: {
      color: colors.primary.main,
      marginRight: 16,
    },
    headerText: {
      fontSize: 16,
      color: colors.primary.main,
    },
    headerOpenIcon: {
      color: colors.primary.main,
      transition: 'all .2s ease',
    },
    headerOpenIconOpened: {
      transform: 'rotateZ(45deg)',
    },
    accordionWrapper: {
      padding: 16,
    },
  });
