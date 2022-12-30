import * as React from 'react';
import Dropzone, { DropzoneProps, DropzoneInputProps, FileRejection, DropzoneRef } from 'react-dropzone';
import Button from '@material-ui/core/Button';

import cx from 'classnames';
import { withStyles, WithStyles } from '@core/theme/utils/with-styles';

import styles from './FileUpload.styles';

export type FileUploadConfig = Omit<DropzoneProps, 'accept' | 'maxSize'> & { accept: string[]; maxSize: number };

export interface FileUploadProps extends WithStyles<typeof styles> {
  config: FileUploadConfig;
  inputProps?: DropzoneInputProps;
  onUpload: (acceptedFiles: File[] | File) => any;
  onReject?: (rejectedFiles: FileRejection[] | FileRejection) => any;
}

const FileUploadComponent: React.FC<FileUploadProps> = ({ classes, onUpload, config, onReject, inputProps }) => {
  const dropzoneRef = React.createRef<DropzoneRef>();
  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]): void => {
    if (rejectedFiles.length) {
      if (onReject) {
        // @ts-ignore
        onReject(config.multiple ? rejectedFiles : rejectedFiles[0]);
      }

      return;
    }

    // @ts-ignore
    onUpload(config.multiple ? acceptedFiles : acceptedFiles[0]);
  };

  return (
    <Dropzone ref={dropzoneRef} onDrop={onDrop} {...config}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className={cx(classes.root, { [classes.rootDisabled]: config.disabled })}>
          <input {...getInputProps(inputProps)} />
          <Button variant="contained" color="secondary" classes={{ root: classes.uploadImage }}>
            Upload Image
          </Button>
        </div>
      )}
    </Dropzone>
  );
};

export const FileUpload = withStyles(styles)(FileUploadComponent);
