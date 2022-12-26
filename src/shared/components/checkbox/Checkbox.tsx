import React from 'react';
import cx from 'classnames';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as BaseCheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core';

import { CheckboxIcon } from '@shared/icons/checkbox';

import styles from './Checkbox.styles';

export interface CheckboxProps
  extends WithStyles<typeof styles>,
    Omit<FormControlLabelProps, 'classes' | 'control' | 'label' | 'onChange'> {
  label?: React.ReactNode;
  inputProps?: BaseCheckboxProps['inputProps'] & { [k: string]: string | number };
  color?: 'primary' | 'secondary' | 'default';
  onChange?: (checked: boolean, e?: any) => any;
  direction?: 'row' | 'column';
  error?: boolean;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({
  classes,
  onChange,
  label = null,
  checked,
  color = 'primary',
  inputProps,
  direction = 'row',
  error,
  ...otherProps
}) => {
  const handleChange = (e: any, checked: boolean) => {
    if (onChange) {
      onChange(checked, e);
    }
  };

  return (
    <FormControlLabel
      {...otherProps}
      label={<>{label}</>}
      classes={{
        root: cx(classes.root, { [classes.rootIconOnly]: !label }, { [classes.rootColumn]: direction === 'column' }),
        label: cx(classes.label, { [classes.labelError]: error }),
      }}
      control={
        <MuiCheckbox
          disableRipple
          color={color}
          inputProps={inputProps}
          classes={{
            root: classes.checkbox,
            checked: classes.checkboxChecked,
          }}
          icon={<span className={cx(classes.icon, { [classes.iconError]: error })} />}
          checkedIcon={<CheckboxIcon classes={{ root: classes.iconChecked }} />}
          checked={checked}
          onChange={handleChange}
        />
      }
    />
  );
};

export const Checkbox = withStyles(styles)(CheckboxComponent);
