import React from 'react';
import { Button, Card, Collapse, Typography } from '@material-ui/core';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import cx from 'classnames';

import { withStyles, WithStyles } from '@core/theme/utils/with-styles';
import { defaultColors } from '@core/theme/constants/colors';
import { getHTTPClient } from '@core/http-client';
import { ColorPicker } from '@shared/components/color-picker';
import { UrlForm } from '@shared/components/url-form';
import { Accordion, AccordionType } from '@shared/components/accordion';
import { RadioGroup } from '@shared/components/radio-group';
import { Flex } from '@shared/components/flex';
import { Checkbox } from '@shared/components/checkbox';
import { Select } from '@shared/components/select';
import { colorTypeOptions, gradientTypeOptions } from '@shared/constants/options';
import { getBase64FromFile } from '@shared/utils/file';
import { initialQRCode } from '@shared/images/bl.in';
import { Loading } from '@shared/components/loading';
import { ShapeForm } from '@shared/components/shape-form';
import { BodyType } from '@shared/components/frames/body-shape';
import { EyeFrameShapeType } from '@shared/components/frames/eye-frame-shape';
import { EyeBallShapeType } from '@shared/components/frames/eye-ball-shape';

import { styles } from './app.styles';

export interface AppProps extends WithStyles<typeof styles> {}

export const $http = getHTTPClient();

const App: React.FC<AppProps> = ({ classes }) => {
  const initialRef = React.useRef(true);
  const urlFieldRef = React.useRef<HTMLDivElement | null>(null);

  const [url, setUrl] = React.useState('https://');

  const [qr, setQr] = React.useState<string>('');

  const [loading, setLoading] = React.useState(false);

  const [urlError, setUrlError] = React.useState(false);
  const [colors, setColors] = React.useState({
    bgColor: defaultColors.white,
    eye1Color: defaultColors.black,
    eye2Color: defaultColors.black,
    eye3Color: defaultColors.black,
    eyeBall1Color: defaultColors.black,
    eyeBall2Color: defaultColors.black,
    eyeBall3Color: defaultColors.black,
    bodyColor: defaultColors.black,
    gradientColor1: defaultColors.black,
    gradientColor2: '#0277BD',
  });
  const [colorRadio, setColorRadio] = React.useState('single');
  const [gradientType, setGradientType] = React.useState('linear');
  const [customEyeColor, setCustomEyeColor] = React.useState<boolean>(false);

  //Body Shape
  const [body, setBody] = React.useState(BodyType.Square);

  //Eye Frame Shape
  const [eye, setEye] = React.useState(EyeFrameShapeType.Frame0);

  //Eye Ball Shape
  const [eyeBall, setEyeBall] = React.useState(EyeBallShapeType.Ball0);

  React.useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;

      return;
    }

    if (url) {
      getQrCode();
    }
  }, [colors.bgColor, body, eye, eyeBall, url]);

  const getQrCode = async () => {
    if (!url || url == 'https://') {
      setUrlError(true);
      urlFieldRef.current?.scroll({ top: 0, behavior: 'smooth' });

      return;
    }

    setLoading(true);

    try {
      const { data } = await $http.post(
        `/qr/custom`,
        {
          data: url,
          size: 300,
          file: 'png',
          download: false,
          config: {
            body: body,
            eye: eye,
            eyeBall: eyeBall,
            bgColor: colors.bgColor,
            gradientType: gradientType,
          },

          // data: 'https://www.bl.ink/',
          // download: false,
          // file: 'svg',
          // size: 200,
          // config: {
          //   bgColor: '#FFFFFF',
          //   body: 'square',
          //   bodyColor: '#A521C7',
          //   brf1: [],
          //   brf2: [],
          //   brf3: [],
          //   erf1: [],
          //   erf2: [],
          //   erf3: [],
          //   eye: 'frame0',
          //   eye1Color: '#A521C7',
          //   eye2Color: '#A521C7',
          //   eye3Color: '#A521C7',
          //   eyeBall: 'ball0',
          //   eyeBall1Color: '#A521C7',
          //   eyeBall2Color: '#A521C7',
          //   eyeBall3Color: '#A521C7',
          //   gradientColor1: '',
          //   gradientColor2: '',
          //   gradientOnEyes: 'true',
          //   gradientType: 'linear',
          //   logo: '',
          //   logoMode: 'default',
          // },
        },
        {
          responseType: 'blob',
        }
      );

      const image = await getBase64FromFile(data);

      setQr(image);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleUrlChange = (s: string) => {
    setUrl(s);

    if (s === 'https://') {
      return;
    }
    s && setUrlError(false);
  };
  const handleChangeColor = (type: string) => (color: string) => {
    if (type === 'eye1Color') {
      setColors({
        ...colors,
        eye1Color: color,
        eye2Color: color,
        eye3Color: color,
      });
      return;
    }

    if (type === 'eyeBall1Color') {
      setColors({
        ...colors,
        eyeBall1Color: color,
        eyeBall2Color: color,
        eyeBall3Color: color,
      });
      return;
    }

    setColors({
      ...colors,
      [type]: color,
    });
  };

  const handleRadioColorChange = (type: string) => {
    if (type === 'gradient') {
      setColors({
        ...colors,
        gradientColor1: colors.bodyColor,
      });
    }

    if (type === 'single') {
      setColors({
        ...colors,
        bodyColor: colors.gradientColor1,
      });
    }

    setColorRadio(type);
  };

  const handleSyncGradientColor = () => {
    setColors({
      ...colors,
      gradientColor1: colors.gradientColor2,
      gradientColor2: colors.gradientColor1,
    });
  };

  const handleGradientTypeChange = (e: React.ChangeEvent<any>, value: string) => {
    setGradientType(value);
  };

  const handleChangeCustomEyeColor = (checked: boolean) => {
    setCustomEyeColor(checked);

    if (!checked) {
      setColors({
        ...colors,
        eye1Color: defaultColors.black,
        eye2Color: defaultColors.black,
        eye3Color: defaultColors.black,
        eyeBall1Color: defaultColors.black,
        eyeBall2Color: defaultColors.black,
        eyeBall3Color: defaultColors.black,
      });
    }
  };

  const handleSwapEyeColor = () => {
    setColors({
      ...colors,
      eye1Color: colors.eyeBall1Color,
      eye2Color: colors.eyeBall2Color,
      eye3Color: colors.eyeBall3Color,
      eyeBall1Color: colors.eye1Color,
      eyeBall2Color: colors.eye2Color,
      eyeBall3Color: colors.eye3Color,
    });
  };

  const handleCopyEyeForeground = () => {
    if (colorRadio === 'single') {
      setColors({
        ...colors,
        eye1Color: colors.bodyColor,
        eyeBall1Color: colors.bodyColor,
      });
    } else {
      setColors({
        ...colors,
        eye1Color: colors.gradientColor1,
        eyeBall1Color: colors.gradientColor2,
      });
    }
  };

  return (
    <Typography component="div" className={classes.root}>
      <Card classes={{ root: classes.card }}>
        <div className={classes.actionsSection} ref={urlFieldRef}>
          <UrlForm error={urlError} url={url} onUrlChange={handleUrlChange} />
          <Accordion type={AccordionType.Options} classes={{ root: classes.accordion }}>
            <Flex direction="column">
              <span className={classes.heading}>Color</span>
              <span className={classes.subHeading}>Foreground Color</span>
              <Flex alignItems="center">
                <RadioGroup value={colorRadio} options={colorTypeOptions} onChange={handleRadioColorChange} />
                <Checkbox
                  label="Custom Eye"
                  checked={customEyeColor}
                  onChange={handleChangeCustomEyeColor}
                  classes={{ root: classes.customEyeCheckbox }}
                />
              </Flex>

              {colorRadio === 'single' && (
                <ColorPicker
                  color={colors.bodyColor}
                  onColorChange={handleChangeColor('bodyColor')}
                  classes={{ root: cx(classes.picker, classes.bodyPicker) }}
                />
              )}
              {colorRadio === 'gradient' && (
                <Flex classes={{ root: classes.gradientContainer }} direction="column">
                  <Flex alignItems="center" wrap="nowrap" justifyContent="space-between">
                    <ColorPicker
                      color={colors.gradientColor1}
                      onColorChange={handleChangeColor('gradientColor1')}
                      classes={{ root: classes.gradientPicker }}
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleSyncGradientColor}
                      classes={{ root: classes.syncButton }}
                    >
                      <SyncAltIcon />
                    </Button>
                    <ColorPicker
                      color={colors.gradientColor2}
                      onColorChange={handleChangeColor('gradientColor2')}
                      classes={{ root: classes.gradientPicker }}
                    />
                  </Flex>
                  <Select
                    value={gradientType}
                    options={gradientTypeOptions}
                    onChange={handleGradientTypeChange}
                    classes={{ root: classes.gradientSelect }}
                  />
                </Flex>
              )}
              <Collapse in={customEyeColor} classes={{ wrapper: classes.customEyeWrapper }}>
                <div className={classes.eyeContainer}>
                  <span className={classes.subHeading}>Eye Color</span>
                  <Flex alignItems="center" wrap="nowrap" justifyContent="space-between">
                    <ColorPicker
                      color={colors.eye1Color}
                      onColorChange={handleChangeColor('eye1Color')}
                      classes={{ root: classes.gradientPicker }}
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleSwapEyeColor}
                      classes={{ root: classes.syncButton }}
                    >
                      <SyncAltIcon />
                    </Button>
                    <ColorPicker
                      color={colors.eyeBall1Color}
                      onColorChange={handleChangeColor('eyeBall1Color')}
                      classes={{ root: classes.gradientPicker }}
                    />
                  </Flex>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCopyEyeForeground}
                    classes={{ root: classes.eyeContainerSyncButton }}
                  >
                    Copy Foreground
                  </Button>
                </div>
              </Collapse>
              <span className={classes.subHeading}>Background Color</span>
              <ColorPicker
                color={colors.bgColor}
                onColorChange={handleChangeColor('bgColor')}
                classes={{ root: classes.picker }}
              />
            </Flex>
          </Accordion>
          <Accordion type={AccordionType.Customise} classes={{ root: classes.accordion }}>
            <ShapeForm
              classes={{ subHeading: classes.subHeading }}
              body={body}
              onBodyChange={setBody}
              eye={eye}
              onEyeChange={setEye}
              eyeBall={eyeBall}
              onEyeBallChange={setEyeBall}
            />
          </Accordion>
        </div>
        <div className={classes.codeSection}>
          <div className={classes.qrCode}>
            <img src={qr || initialQRCode} alt="" className={classes.qrCodeImage} />
            {loading && <Loading absolute />}
          </div>
        </div>
      </Card>
    </Typography>
  );
};

export default withStyles(styles)(App);
