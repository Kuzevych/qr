import { LogoType } from '@shared/components/frames/logo';

export const defaultLogoSrc = (type: LogoType) => {
  const config = {
    [LogoType.Facebook]: 'https://www.qrcode-monkey.com/img/qr/logos/facebook.svg',
    [LogoType.FacebookCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/facebook-circle.svg',
    [LogoType.TwitterCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/twitter-circle.svg',
    [LogoType.Youtube]: 'https://www.qrcode-monkey.com/img/qr/logos/youtube.svg',
    [LogoType.YoutubeCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/youtube-circle.svg',
    [LogoType.GooglePlusCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/googleplus-circle.svg',
    [LogoType.InstagramCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/instagram-circle.svg',
    [LogoType.LinkedinCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/linkedin-circle.svg',
    [LogoType.XingCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/xing-circle.svg',
    [LogoType.PinterestCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/pinterest-circle.svg',
    [LogoType.VideoCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/vimeo-circle.svg',
    [LogoType.SoundCloudCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/soundcloud-circle.svg',
    [LogoType.VkCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/vk-circle.svg',
    [LogoType.WhatsappCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/whatsapp-circle.svg',
    [LogoType.Appstore]: 'https://www.qrcode-monkey.com/img/qr/logos/appstore.svg',
    [LogoType.GooglePlay]: 'https://www.qrcode-monkey.com/img/qr/logos/google-play.svg',
    [LogoType.Gmail]: 'https://www.qrcode-monkey.com/img/qr/logos/gmail.svg',
    [LogoType.CalendarCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/calendar-circle.svg',
    [LogoType.DocumentCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/document-circle.svg',
    [LogoType.PhoneCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/phone-circle.svg',
    [LogoType.ShareCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/share-circle.svg',
    [LogoType.WifiCircle]: 'https://www.qrcode-monkey.com/img/qr/logos/wifi-circle.svg',
    [LogoType.Bitcoin]: 'https://www.qrcode-monkey.com/img/qr/logos/bitcoin.svg',
  };

  return config[type];
};
