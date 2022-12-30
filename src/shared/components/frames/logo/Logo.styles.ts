import { createStyles } from '@core/theme/utils/create-styles';
import { LogoType } from './Logo';
import { colors } from '@core/theme/constants/colors';

export const styles = () =>
  createStyles({
    root: {
      width: 60,
      height: 60,
      transition: 'all .3s',
      cursor: 'pointer',
      border: `3px solid transparent`,
      margin: '0 8px 8px 0',
      padding: 7,

      '&:hover': {
        borderColor: colors.border,
      },
    },
    rootChecked: {
      borderColor: colors.green,
    },
    body: {
      width: 100,
      height: 100,
      transform: 'scale(.4) translate(-72px,-72px)',
      backgroundRepeat: 'no-repeat',
    },
    [LogoType.Facebook]: { backgroundPosition: '-5px -115px' },
    [LogoType.FacebookCircle]: { backgroundPosition: '-115px -115px' },
    [LogoType.TwitterCircle]: { backgroundPosition: '-225px -335px' },
    [LogoType.Youtube]: { backgroundPosition: '-335px -445px' },
    [LogoType.YoutubeCircle]: { backgroundPosition: '-445px -445px' },
    [LogoType.GooglePlusCircle]: { backgroundPosition: '-445px -115px' },
    [LogoType.InstagramCircle]: { backgroundPosition: '-5px -225px' },
    [LogoType.LinkedinCircle]: { backgroundPosition: '-115px -225px' },
    [LogoType.XingCircle]: { backgroundPosition: '-225px -445px' },
    [LogoType.PinterestCircle]: { backgroundPosition: '-335px -225px' },
    [LogoType.VideoCircle]: { backgroundPosition: '-335px -335px' },
    [LogoType.SoundCloudCircle]: { backgroundPosition: '-115px -335px' },
    [LogoType.VkCircle]: { backgroundPosition: '-445px -335px' },
    [LogoType.WhatsappCircle]: { backgroundPosition: '-5px -445px' },
    [LogoType.Appstore]: { backgroundPosition: '-5px -5px' },
    [LogoType.GooglePlay]: { backgroundPosition: '-445px -115px' },
    [LogoType.Gmail]: { backgroundPosition: '-225px -115px' },
    [LogoType.CalendarCircle]: { backgroundPosition: '-225px -5px' },
    [LogoType.DocumentCircle]: { backgroundPosition: '-445px -5px' },
    [LogoType.PhoneCircle]: { backgroundPosition: '-225px -225px' },
    [LogoType.ShareCircle]: { backgroundPosition: '-5px -335px' },
    [LogoType.WifiCircle]: { backgroundPosition: '-115px -445px' },
    [LogoType.Bitcoin]: { backgroundPosition: '-5px -555px' },
  });
