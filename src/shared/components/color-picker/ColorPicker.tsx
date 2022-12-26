import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { HexColorPicker } from 'react-colorful';

import { withStyles, WithStyles } from '@core/theme/utils/with-styles';
import { Flex } from '@shared/components/flex';
import { TextField } from '@shared/components/text-field';

import { styles } from './ColorPicker.styles';

export interface ColorPickerProps extends WithStyles<typeof styles> {
  color: string;
  onColorChange: (color: string) => void;
  position?: ColorPickerPosition;
}

export enum ColorPickerPosition {
  Top = 'top',
  Bottom = 'bottom',
}

const ColorPickerComponent: React.FC<ColorPickerProps> = ({
  classes,
  color,
  onColorChange,
  position = ColorPickerPosition.Top,
}) => {
  const [open, setOpen] = React.useState(false);
  const [colorValue, setColorValue] = React.useState(color);

  React.useEffect(() => {
    setColorValue(color);
  }, [color]);

  const handlePickerColorChange = (newColor: string) => {
    setColorValue(newColor);
  };

  const renderPicker = React.useCallback(() => {
    if (open) {
      return <HexColorPicker color={color} onChange={handlePickerColorChange} />;
    }

    return undefined;
  }, [open, onColorChange]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);
  };

  const handleBlur = () => {
    if (colorValue.startsWith('#') && colorValue.length == 7) {
      onColorChange(colorValue);
    } else if (colorValue.length == 6) {
      onColorChange(`#${colorValue}`);
    }
  };

  const handleClosePicker = () => {
    setOpen(false);
    onColorChange(colorValue);
  };

  return (
    <Flex className={classes.root}>
      <TextField
        value={colorValue}
        onChange={handleColorChange}
        onBlur={handleBlur}
        classes={{
          root: classes.textField,
          input: classes.textFieldInput,
        }}
      />
      <Flex autoWidth={false} alignItems="center" justifyContent="center" className={classes.color}>
        <ClickAwayListener onClickAway={handleClosePicker}>
          <div className={classes.container} style={{ backgroundColor: color }} onClick={() => setOpen(true)}>
            <div className={classes[position]}>{renderPicker()}</div>
          </div>
        </ClickAwayListener>
      </Flex>
    </Flex>
  );
};

export const ColorPicker = withStyles(styles)(ColorPickerComponent);
