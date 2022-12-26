import React from 'react';
import cx from 'classnames';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
import { Flex } from '@shared/components/flex';
import { BodyShape, BodyType } from '@shared/components/frames/body-shape';
import { EyeFrameShape, EyeFrameShapeType } from '@shared/components/frames/eye-frame-shape';
import { EyeBallShape, EyeBallShapeType } from '@shared/components/frames/eye-ball-shape';

import { styles } from './ShapeForm.styles';

export interface ShapeFormProps extends WithStyles<typeof styles> {
  body: BodyType;
  onBodyChange: (type: BodyType) => void;
  eye: EyeFrameShapeType;
  onEyeChange: (type: EyeFrameShapeType) => void;
  eyeBall: EyeBallShapeType;
  onEyeBallChange: (type: EyeBallShapeType) => void;
}

const ShapeFormComponent: React.FC<ShapeFormProps> = ({
  classes,
  body,
  onBodyChange,
  eye,
  onEyeChange,
  eyeBall,
  onEyeBallChange,
}) => {
  const renderBodyShapes = React.useMemo(() => {
    return (Object.keys(BodyType) as (keyof typeof BodyType)[]).map((el, idx) => (
      <BodyShape type={BodyType[el]} checked={body == BodyType[el]} onChange={onBodyChange} key={idx} />
    ));
  }, [body, onBodyChange]);

  const renderEyeFrameShapes = React.useMemo(() => {
    return (Object.keys(EyeFrameShapeType) as (keyof typeof EyeFrameShapeType)[]).map((el, idx) => (
      <EyeFrameShape
        type={EyeFrameShapeType[el]}
        checked={eye == EyeFrameShapeType[el]}
        onChange={onEyeChange}
        key={idx}
      />
    ));
  }, [eye, onEyeChange]);

  const renderEyeBallShapes = React.useMemo(() => {
    return (Object.keys(EyeBallShapeType) as (keyof typeof EyeBallShapeType)[]).map((el, idx) => (
      <EyeBallShape
        type={EyeBallShapeType[el]}
        checked={eyeBall == EyeBallShapeType[el]}
        onChange={onEyeBallChange}
        key={idx}
      />
    ));
  }, [eyeBall, onEyeBallChange]);

  return (
    <Flex className={classes.root} direction="column">
      <span className={classes.heading}>Shape & Form</span>
      <span className={classes.subHeading}>Dots</span>
      <Flex className={classes.container}>{renderBodyShapes}</Flex>
      <span className={cx(classes.subHeading, classes.addHeading)}>Marker border</span>
      <Flex className={classes.container}>{renderEyeFrameShapes}</Flex>
      <span className={cx(classes.subHeading, classes.addHeading)}>Eye Ball Shape</span>
      <Flex className={classes.container}>{renderEyeBallShapes}</Flex>
    </Flex>
  );
};

export const ShapeForm = withStyles(styles)(ShapeFormComponent);
