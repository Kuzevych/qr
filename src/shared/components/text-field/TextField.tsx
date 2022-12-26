import React from 'react';
import cx from 'classnames';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, FormLabel } from '@material-ui/core';

import { styles } from './TextField.styles';

type Classes = WithStyles<typeof styles>;

export enum NormalizeType {
  onChange,
  onBlur,
}

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'classes' | 'margin'>, Classes {}

class TextFieldComponent extends React.Component<TextFieldProps> {
  private handleBlur = (e: any) => {
    e.persist();

    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(e);
    }
  };

  private handleChange = (e: any) => {
    e.persist();

    const { onChange } = this.props;

    if (onChange) {
      onChange(e);
    }
  };

  render() {
    const {
      className,
      label,
      classes,
      InputProps,
      type,
      inputProps,
      fullWidth,
      required,
      error,
      onBlur,
      onChange,
      ...otherProps
    } = this.props;

    const {
      root: rootClass,
      rootFullWidth: rootFullWidthClass,
      labelRoot: labelRootClass,
      input: inputClass,
      errorText: errorTextClass,
      medium: mediumClass,
      label: labelClass,
      ...otherClasses
    } = classes;

    return (
      <div className={cx(rootClass, { [rootFullWidthClass]: fullWidth }, className)}>
        {label && (
          <FormLabel classes={{ root: cx(labelRootClass, labelClass) }} component="legend" error={error}>
            {label}
          </FormLabel>
        )}
        <MuiTextField
          type={type}
          variant="outlined"
          size="small"
          error={error}
          helperText={null}
          fullWidth={fullWidth}
          classes={otherClasses}
          InputProps={{
            classes: {
              root: inputClass,
            },
            ...InputProps,
          }}
          inputProps={{
            ...inputProps,
          }}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          {...otherProps}
        />
        {error && <span className={errorTextClass}>This field is required</span>}
      </div>
    );
  }
}

export const TextField = withStyles(styles)(TextFieldComponent);
