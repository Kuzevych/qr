import React from 'react';
import SliderMui from '@material-ui/core/Slider';

import { WithStyles, withStyles } from '@core/theme/utils/with-styles';
import { Flex } from '@shared/components/flex';

import { styles } from './Slider.styles';

export interface SliderProps extends WithStyles<typeof styles> {
  value: number;
  onValueChange: (v: number) => void;
}

const SliderComponent: React.FC<SliderProps> = ({ classes, value, onValueChange }) => {
  const [sliderValue, setSliderValue] = React.useState(value);
  const handleValueChange = (e: React.ChangeEvent<{}>, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setSliderValue(value);
    }
  };

  const handleValueCommitted = (e: React.ChangeEvent<{}>, value: number | number[]) => {
    if (!Array.isArray(value)) {
      onValueChange(value);
    }
  };

  const pxValue = React.useMemo(() => {
    return `${sliderValue}x${sliderValue} Px`;
  }, [sliderValue]);

  return (
    <div className={classes.index}>
      <SliderMui
        classes={{
          root: classes.root,
          thumb: classes.thumb,
          active: classes.active,
          valueLabel: classes.valueLabel,
          track: classes.track,
          rail: classes.rail,
        }}
        value={sliderValue}
        min={10}
        step={5}
        max={300}
        onChange={handleValueChange}
        onChangeCommitted={handleValueCommitted}
      />
      <Flex alignItems="center" classes={{ root: classes.sliderLabels }}>
        <span className={classes.low}>Low Quality</span>
        <span className={classes.center}>{pxValue}</span>
        <span className={classes.high}>High Quality</span>
      </Flex>
    </div>
  );
};

export const Slider = withStyles(styles)(SliderComponent);
