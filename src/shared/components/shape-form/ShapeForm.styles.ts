import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from "@core/theme/constants/colors";

export const styles = () =>
  createStyles({
    root: {},
    heading: {
      fontSize: 28,
      color: colors.primary.main,
      fontWeight: 500,
      marginBottom: 32,
    },
    subHeading: {},
    container: {},
    addHeading: {
      marginTop: 12,
    },
  });
