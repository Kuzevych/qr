import React from 'react';
import { Card, Collapse } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from '@material-ui/icons/Image';
import CropFreeIcon from '@material-ui/icons/CropFree';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
import { Flex } from '@shared/components/flex';

import { styles } from './Accoriod.styles';

export interface AccordionProps extends WithStyles<typeof styles> {
  type: AccordionType;
}

export enum AccordionType {
  Options = 'options',
  Customise = 'customise',
  Logos = 'Logos',
}

const AccordionComponent: React.FC<AccordionProps> = ({ classes, type, children }) => {
  const [open, setOpen] = React.useState(false);

  const accordionType = React.useMemo(() => {
    const config = {
      [AccordionType.Options]: {
        text: 'Options',
        icon: <SettingsIcon className={classes.headerIcon} />,
      },
      [AccordionType.Customise]: {
        text: 'Customise design',
        icon: <CropFreeIcon className={classes.headerIcon} />,
      },
      [AccordionType.Logos]: {
        text: 'Logo',
        icon: <ImageIcon className={classes.headerIcon} />,
      },
    };

    return config[type];
  }, [type]);

  return (
    <Card elevation={0} classes={{ root: classes.root }}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        className={classes.heading}
        onClick={() => setOpen(!open)}
      >
        <Flex className={cx(classes.headingContainer, { [classes.headingContainerOpened]: open })}>
          {accordionType.icon}
          <span className={classes.headerText}>{accordionType.text}</span>
        </Flex>
        <AddIcon className={cx(classes.headerOpenIcon, { [classes.headerOpenIconOpened]: open })} />
      </Flex>
      <Collapse classes={{ wrapper: classes.accordionWrapper }} in={open}>
        {children}
      </Collapse>
    </Card>
  );
};

export const Accordion = withStyles(styles)(AccordionComponent);
