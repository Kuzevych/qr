import { Theme } from '@core/theme/types/main';
import { createStyles } from '@core/theme/utils/create-styles';

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
          color: '#11ab7c',
        },

        '& $headerText': {
          color: '#11ab7c',
        },

        '& $headerOpenIcon': {
          color: '#11ab7c',
        },
      },
    },
    headingContainer: {},
    headingContainerOpened: {
      '& $headerIcon': {
        color: '#11ab7c',
      },

      '& $headerText': {
        color: '#11ab7c',
      },

      '& $headerOpenIconOpened': {
        color: '#11ab7c',
      },
    },
    headerIcon: {
      color: '#2a354f',
      marginRight: 16,
    },
    headerText: {
      fontSize: 16,
      color: '#2a354f',
    },
    headerOpenIcon: {
      color: '#2a354f',
      transition: 'all .2s ease',
    },
    headerOpenIconOpened: {
      transform: 'rotateZ(45deg)',
    },
    accordionWrapper: {
      padding: 16,
    },
  });
