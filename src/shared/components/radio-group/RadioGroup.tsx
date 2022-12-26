import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { RadioGroup as MuiRadioGroup, FormLabel } from '@material-ui/core';

import { Flex } from '@shared/components/flex';
import { Radio } from '@shared/components/radio';

import styles from './RadioGroup.styles';
export interface RadioGroupOption {
  disabled?: boolean;
  id: string;
  label: React.ReactNode;
  content?: React.ReactNode;
}

export type Value = RadioGroupOption['id'];

export interface RadioGroupProps extends WithStyles<typeof styles> {
  options: Array<RadioGroupOption>;
  error?: boolean;
  errorText?: string;
  value?: string;
  label?: React.ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  onChange?: (value: string) => any;
}
const RadioGroupComponent: React.FC<RadioGroupProps> = ({
  classes,
  options,
  value,
  disabled,
  onChange,
  color = 'primary',
  label,
}) => {
  const name = React.useMemo(() => {
    return options.map(({ id }) => id).join();
  }, [options]);

  const handleSerializeValue = (val: Value) => {
    if (val == undefined) {
      return '';
    }

    return val;
  };

  const renderRadio = (option: RadioGroupOption) => {
    const radio = (
      <>
        <Radio
          disabled={disabled || option.disabled || false}
          key={option.id}
          value={option.id}
          label={option.label}
          color={color}
          classes={{
            root: classes.formControl,
            label: classes.formControlLabel,
          }}
        />
        {option?.content && value == option.id && <div className={classes.additionalContent}>{option.content}</div>}
      </>
    );
    return (
      <Flex key={option.id} direction="column" classes={{ root: classes.radioWrapper }}>
        {radio}
      </Flex>
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const normalizedValue = handleSerializeValue((event.target as HTMLInputElement).value);

    if (onChange) {
      onChange(normalizedValue as string);
    }
  };

  return (
    <div className={classes.root}>
      {label && (
        <FormLabel className={classes.label} component="legend">
          {label}
        </FormLabel>
      )}
      <MuiRadioGroup classes={{ root: classes.radios }} name={name} value={value} color={color} onChange={handleChange}>
        {options.map((option) => renderRadio(option))}
      </MuiRadioGroup>
    </div>
  );
};

export const RadioGroup = withStyles(styles)(RadioGroupComponent);
