import React from 'react';
import cx from 'classnames';
import {
  FormControl,
  SelectProps as MuiSelectProps,
  Select as MuiSelect,
  MenuItem,
  TooltipProps,
} from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';

import { styles } from './Select.styles';

type Classes = WithStyles<typeof styles>;

export interface Option {
  label: string;
  id: string;
}

export type Value =  Option['id'];

export interface SelectProps extends Omit<MuiSelectProps, 'classes' | 'onChange'>, Classes {
  border?: boolean;
  errorText?: string;
  options: Array<Option>;
  tooltip?: string;
  tooltipPlacement?: TooltipProps['placement'];
  value?: Value;
  onChange?: (e: React.ChangeEvent<any>, value: Value, option?: Option ) => any;
}

const SelectComponent: React.FC<SelectProps> = ({
  border = true,
  classes,
  errorText,
  multiple,
  options,
  placeholder,
  renderValue,
  value,
  onChange,
  ...otherProps
}) => {
  const handleChange = (e: React.ChangeEvent<any>) => {
    e.persist();

    const { value } = e.target;

    if (onChange && value) {
      onChange(e, value);
    }

    // When user choose empty option ("Select option")
    if (onChange && !value) {
      onChange(e, '');
    }
  };

  const getOption = (id: unknown) => {
    return options.find((option) => option.id == id) as Option;
  };

  const renderSelectorValue = (v: unknown) => {
    if (renderValue && v) {
      return renderValue(v as Value);
    }

    const label = Array.isArray(v) ? v.map((id) => getOption(id)?.label).join(', ') : getOption(v)?.label;

    if (Array.isArray(v)) {
      return (
        <div
          className={cx(classes.value, classes.valueMultiple, { [classes.placeholderDisabled]: otherProps.disabled })}
        >
          {label}
        </div>
      );
    }

    return <div className={classes.value}>{label || placeholder}</div>;
  };

  const renderOption = (option: Option) => {
    return (
      <MenuItem
        value={option.id}
        key={option.id}
        classes={{
          root: classes.menuItem,
          selected: classes.menuItemSelected,
        }}
      >
        {option.label}
      </MenuItem>
    );
  };

  let content = (
    <>
      <MuiSelect
        {...otherProps}
        displayEmpty
        multiple={multiple}
        defaultValue={placeholder}
        value={multiple && !Array.isArray(value) ? [] : value}
        onChange={handleChange}
        className={cx(classes.select, { [classes.selectDisabled]: otherProps.disabled })}
        classes={{
          root: classes.muiSelectRoot,
          select: classes.muiSelect,
          icon: classes.muiIcon,
          outlined: classes.muiOutlined,
          selectMenu: classes.muiMenu,
        }}
        error={otherProps.error}
        placeholder={placeholder}
        renderValue={renderSelectorValue}
        IconComponent={KeyboardArrowDownIcon}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
      >
        {options.map((option) => renderOption(option))}
      </MuiSelect>
    </>
  );
  return (
    <FormControl
      size="small"
      variant="outlined"
      classes={{ root: cx(classes.root, { [classes.rootNoBorder]: !border }) }}
      error={otherProps.error}
    >
      {content}
    </FormControl>
  );
};

export const Select = withStyles(styles)(SelectComponent);
