import { createStyles } from '@core/theme/utils/create-styles';
import { colors } from '@core/theme/constants/colors';
import { ColorPickerPosition } from '@shared/components/color-picker/ColorPicker';

const colorPartWidth = 115;
export const styles = () =>
  createStyles({
    root: {},
    color: {
      border: `1px solid ${colors.border}`,
      padding: 1,
      width: colorPartWidth,
      height: 35,
      backgroundColor: 'white',
    },
    container: {
      width: '97%',
      height: '90%',
      position: 'relative',
      border: `1px solid #e3ecf2`,
    },
    [ColorPickerPosition.Bottom]: {
      position: 'absolute',
      top: 33,
      right: 0,
      zIndex: 2,
    },
    [ColorPickerPosition.Top]: {
      position: 'absolute',
      bottom: 33,
      right: 0,
      zIndex: 2,
    },
    // pickerContainer: {
    //   position: 'absolute',
    //   top: 33,
    //   right: 0,
    //   zIndex: 2,
    // },
    textField: {
      width: `calc(100% - ${colorPartWidth}px)`,
    },
    textFieldInput: {
      height: 35,
      borderRadius: 0,

      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#e3ecf2',
      },
    },
  });
