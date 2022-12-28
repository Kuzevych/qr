import React from 'react';
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
  IconButton,
  Slide,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { Close as CloseIcon } from '@material-ui/icons';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
import { Flex } from '@shared/components/flex';

import { styles } from './Dialog.styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export interface DialogHeadingProps extends Omit<MuiDialogTitleProps, 'classes'> {
  withCloseButton?: boolean;
  heading?: React.ReactNode;
  onClose?: () => any;
}

export interface DialogProps extends WithStyles<typeof styles>, Omit<MuiDialogProps, 'classes'> {
  withTransition?: boolean;
  actionNode?: React.ReactElement;
}

const DialogComponent: React.FC<DialogProps> = ({
  classes,
  open,
  withTransition = false,
  onClose,
  onSubmit,
  actionNode,
  children,
  ...otherProps
}) => {
  const handleCancel = () => {
    if (onClose) {
      onClose('', 'backdropClick');
    }
  };

  return (
    <MuiDialog
      {...otherProps}
      open={open}
      {...(withTransition && { TransitionComponent: Transition })}
      onClose={onClose}
      classes={{ paper: classes.root }}
    >
      <MuiDialogTitle disableTypography className={classes.titleRoot}>
        <Flex alignItems="center" justifyContent="flex-end" classes={{ root: classes.title }}>
          <IconButton disableRipple className={classes.closeIcon} onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </Flex>
      </MuiDialogTitle>

      {children}
    </MuiDialog>
  );
};

export const Dialog = withStyles(styles)(DialogComponent);
