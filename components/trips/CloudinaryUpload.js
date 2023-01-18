import { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UploadWidget from './UploadWidget';
import ImageIcon from '@mui/icons-material/Image';

import styles from './addForm.module.css';

export default function CloudinaryWidget({ url, setUrl, label }) {
  const [error, updateError] = useState();

  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    setUrl(result?.info?.secure_url);
  }

  return (
    <div>
      {url ? (
        <div>
          <Image src={url} alt='Uploaded image' width={200} height={200} />
        </div>
      ) : (
        <div className={styles.imagePlaceholder}>
          <ImageIcon sx={{ color: '#999', fontSize: 50 }} />
        </div>
      )}
      <UploadWidget onUpload={handleOnUpload}>
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <Button
              variant='contained'
              component='label'
              onClick={handleOnClick}
              startIcon={<PhotoCamera />}
            >
              {label}
            </Button>
          );
        }}
      </UploadWidget>

      {error && <p>{error}</p>}
    </div>
  );
}
