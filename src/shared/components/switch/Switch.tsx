import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel/FormLabel';

import { Flex } from '@shared/components/flex';

import { styles } from './Switch.styles';

export interface SwitchProps extends WithStyles<typeof styles> {
  label?: React.ReactNode;
  switchProps: MuiSwitchProps;
}

const SwitchComponent: React.FC<SwitchProps> = ({ classes, switchProps, label }) => {
  return (
    <Flex alignItems="center" className={classes.root}>
      {label && (
        <FormLabel classes={{ root: classes.label }} component="legend">
          {label}
        </FormLabel>
      )}
      <MuiSwitch {...switchProps} />
    </Flex>
  );
};

export const Switch = withStyles(styles)(SwitchComponent);
