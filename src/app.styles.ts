import { colors } from '@core/theme/constants/colors';
import { createStyles } from '@core/theme/utils/create-styles';
import { alpha } from "@core/theme/utils/alpha";

export function styles() {
  return createStyles({
    root: {
      height: '100%',
      padding: 40,
    },
    card: {
      maxWidth: 1140,
      margin: 'auto',
      backgroundColor: '#f3f7fa',
      height: '100%',
      border: `1px solid ${colors.border}`,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    accordion: {
      marginBottom: 24,
    },
    picker: {
      marginTop: 10,
    },
    actionsSection: {
      width: '70%',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      padding: 48,
      overflow: 'auto',
      borderRight: `1px solid ${colors.border}`,
    },
    codeSection: {
      width: '30%',
      padding: 20,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      backgroundColor: colors.white,
    },
    qrCode: {
      width: '100%',
      height: 300,
      position: 'relative',
    },
    qrCodeImage: {
      width: '100%',
    },
    heading: {
      fontSize: 28,
      color: colors.primary.main,
      fontWeight: 500,
      marginBottom: 32,
    },
    subHeading: {
      marginBottom: 10,
      color: '#2a354f',
      fontSize: 16,
    },
    customEyeCheckbox: {
      marginLeft: 10,
      marginBottom: 7,
    },
    checked: {
      color: colors.green,
    },
    gradientContainer: {
      marginBottom: 20,
    },
    gradientPicker: {
      marginTop: 10,
      flex: '1 1 auto',
    },
    syncButton: {
      margin: '10px 5px 0 5px',
      borderRadius: 0,
      flex: '0 1 auto',
    },
    bodyPicker: {
      marginBottom: 20,
    },
    gradientSelect: {
      maxWidth: '100%',
      marginTop: 10,
    },
    eyeContainer: {
      transition: 'all .3s',
    },
    customEyeWrapper: {
      marginBottom: 16,
    },
    eyeContainerSyncButton: {
      borderRadius: 0,
      marginTop: 10,
    },
    downloadBtn: {
      width: 125,
      marginTop: 10,
      backgroundColor: colors.primary.green,

      '&:hover': {
        backgroundColor: alpha(colors.primary.green, .7)
      }
    },
    downloadBtnLabel: {
      fontSize: 12
    }
  });
}
