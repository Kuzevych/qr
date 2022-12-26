import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import {
  Radio as MuiRadio,
  RadioProps as BaseRadioProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core';

import styles from './Radio.styles';

export interface RadioProps
  extends WithStyles<typeof styles>,
    Omit<FormControlLabelProps, 'classes' | 'control' | 'onChange'> {
  inputProps?: BaseRadioProps['inputProps'] & { [k: string]: string | number };
  color: 'primary' | 'secondary' | 'default';
  onChange?: (checked: boolean, e: any) => any;
}

class RadioComponent extends React.Component<RadioProps> {
  render() {
    const { checked, disabled, color, classes, onChange, inputProps, ...otherProps } = this.props;

    return (
      <FormControlLabel
        {...otherProps}
        disabled={disabled}
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        control={
          <MuiRadio
            inputProps={inputProps}
            color={color}
            disabled={disabled}
            classes={{
              root: classes.radio,
              checked: classes.radioChecked,
            }}
            icon={<div className={classes.icon} />}
            checkedIcon={
              <div className={cx(classes.icon, classes.iconChecked)}>
                <div className={classes.checked} />{' '}
              </div>
            }
            checked={checked}
            onChange={this.handleChange}
          />
        }
      />
    );
  }

  private handleChange = (e: any, checked: boolean) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(checked, e);
    }
  };
}

export const Radio = withStyles(styles)(RadioComponent);
