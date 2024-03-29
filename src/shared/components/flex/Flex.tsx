import React from 'react';

import { Grid, GridProps } from '../grid';

export interface FlexProps extends GridProps {
  autoWidth?: boolean;
}

export const Flex: React.FC<FlexProps> = ({ autoWidth, ...otherProps }) => {
  return <Grid style={autoWidth ? { width: 'auto' } : {}} container {...otherProps} />;
};

Flex.defaultProps = {
  autoWidth: true,
};
