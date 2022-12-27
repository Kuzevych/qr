import uniq from 'lodash/uniq';

export const downloadFile = (part: BlobPart, filename: string, type = 'image/png') => {
  const file = new Blob([part], { type });

  let url = window.URL.createObjectURL(file);
  let a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
};

export const downloadBase64 = (image: string, type: 'png' | 'svg') => {
  let a = document.createElement('a');

  if (type == 'png') {
    a.href = `data:image/${type};base64,${image}`;
  }

  if (type == 'svg') {
    a.href = `data:image/${type}+xml;base64,${image}`;
  }
  a.download = `qr-code.${type}`;
  a.click();
};

export const getBase64FromFile = (file: File): Promise<string> => {
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = ({ target }) => {
      if (target) {
        resolve(String(target.result));
      }
    };

    reader.readAsDataURL(file);
  });
};

export const getFileExtensionLabel = (extension: string): string => {
  const labels = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
  };

  if (extension[0] === '.') {
    extension = extension.substring(1);
  }

  // @ts-ignore
  return (labels[extension] || extension).toUpperCase();
};

export const getFileExtensionLabels = (extensions: Array<string>) => {
  return uniq(extensions.map(getFileExtensionLabel)).join(', ');
};

export const parseBytes = (bytes: number, decimals = 2): { amount: number; unit: string } => {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  if (bytes === 0) {
    return {
      amount: 0,
      unit: units[0] as string,
    };
  }

  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return {
    amount: parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)),
    unit: units[i] as string,
  };
};
