import { colors } from '@core/theme/constants/colors';
import { createStyles } from '@core/theme/utils/create-styles';
import { Theme } from '@core/theme/types/main';
export const styles = ({ breakpoints }: Theme) => {
  return createStyles({
    root: {
      height: '100%',
      padding: 40,
    },
    card: {
      maxWidth: 1140,
      margin: 'auto',
      backgroundColor: colors.neutral.lightGrey,
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
      minWidth: 300,
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
      borderRadius: 4,
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
    gradientWrapper: {},
    gradientPicker: {
      marginTop: 10,
      flex: '1 1 auto',
    },
    syncButton: {
      margin: '10px 5px 0 5px',
      borderRadius: 0,
      flex: '0 1 auto',
    },
    horizontalSyncIcon: { display: 'block' },
    verticalSyncIcon: { display: 'none' },
    bodyPicker: {
      marginBottom: 20,
    },
    gradientSelect: {
      maxWidth: '100%',
      marginTop: 10,
    },
    eyeContainer: {},
    customEyeWrapper: {
      marginBottom: 16,
    },
    eyeContainerSyncButton: {
      borderRadius: 0,
      marginTop: 10,
    },
    downloadBtn: {
      height: 52,
      flex: '1 1 auto',
      marginTop: 10,
    },
    downloadBtnPng: {
      marginRight: 12,
    },
    downloadBtnLabel: {
      fontSize: 12,
      color: colors.white,
    },
    [breakpoints.down('sm')]: {
      root: {
        padding: 15,
      },
      actionsSection: {
        padding: 20,
      },
      gradientWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      gradientPicker: { width: '100% !important' },
      syncButton: { marginRight: 0, marginLeft: 0 },
      horizontalSyncIcon: { display: 'none' },
      verticalSyncIcon: { display: 'block' },
      customEyeCheckbox: { marginLeft: 0 },
    },
    [breakpoints.down('xs')]: {
      root: { padding: 4 },
      card: {
        flexDirection: 'column',
        overflow: 'auto',
      },
      actionsSection: {
        width: '100%',
        padding: 10,
        overflow: 'visible',
      },
      codeSection: {
        width: '100%',
        padding: 10,
        backgroundColor: colors.neutral.lightGrey,
      },
      qrCode: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      qrCodeImage: {
        maxHeight: '100%',
        width: 'auto',
      },
    },
  });
};
