import { useRef } from 'react';
import Script from 'next/script';

const UploadWidget = ({ children, onUpload }) => {
  const cloudinary = useRef();
  const widget = useRef();

  function createWidget() {
    const options = {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      multiple: false,
      sources: ['local'],
    };

    return cloudinary.current?.createUploadWidget(
      options,
      function (error, result) {
        if (error || result.event === 'success') {
          onUpload(error, result);
        }
      }
    );
  }

  function open() {
    if (!widget?.current) {
      widget.current = createWidget();
    }

    widget?.current && widget.current.open();
  }

  function handleOnLoad() {
    cloudinary.current = window.cloudinary;
  }

  return (
    <>
      {children({ open })}
      <Script
        id='cloudinary'
        src='https://widget.cloudinary.com/v2.0/global/all.js'
        onLoad={handleOnLoad}
      />
    </>
  );
};

export default UploadWidget;
