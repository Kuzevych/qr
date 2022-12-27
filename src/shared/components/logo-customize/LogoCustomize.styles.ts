import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';
export const styles = () =>
  createStyles({
    root: {
      width: '100%',
    },
    uploadContainer: {
      marginBottom: 20,
    },
    fileUpload: {
      marginBottom: 20,
    },
    subHeading: {
      display: 'block',
      marginBottom: 10,
      color: '#2a354f',
      fontSize: 16,
    },
    logos: {},
    switch: {
      flexDirection: 'row-reverse',
    },
    switchLabel: {
      fontSize: 14,
      color: colors.primary.main,
    },
    imageContainer: {
      position: 'relative',
      marginLeft: 20,
      width: 120,
      height: 120,
      display: 'none',
    },
    imageContainerVisible: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      borderRadius: 4,
    },
  });
