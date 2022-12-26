import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { withStyles, WithStyles } from '@core/theme/utils/with-styles';

import { styles } from './Checkbox.styles';

interface Props extends Omit<SvgIconProps, 'classes'>, WithStyles<typeof styles> {}

const CheckboxComponent: React.FC<Props> = ({ classes }) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      classes={{ root: classes.root }}
    >
      <path d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
    </SvgIcon>
  );
};

export const CheckboxIcon = withStyles(styles)(CheckboxComponent);
