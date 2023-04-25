import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/upload.jpg';
import './Upload.css';

export const UploadFile = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  function handleImageClick() {
    fileInputRef.current.click();
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className='container-fluid custom_container'>
      <img
        className='uploading'
        onClick={handleImageClick}
        src={image}
        alt='abc'
      />
      <input
        type='file'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <p className='text'>Please Upload the artifacts Zip file</p>
    </div>
  );
};
