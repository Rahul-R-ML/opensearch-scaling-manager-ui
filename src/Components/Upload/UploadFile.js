import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/upload.jpg';
import './Upload.css';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import { Upload } from '../../services/service';

export const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const fileInputRef = useRef(null);

  function handleImageClick() {
    fileInputRef.current.click();
  }

  async function uploadFile() {
    try {
      setSpinner(true);
      const response = await Upload(file);
      setSpinner(false);
      // navigate to next page on success
    } catch (err) {
      console.log(err);
      setSpinner(false);
    }
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    uploadFile();
  };

  return (
    <div className='body_wrapper'>
      <h3 className='title body_header'>
        Welcome to <span className='brand'>OpenSearch Scaling Manager</span>
      </h3>
      <div className='upload__wrapper'>
        <div className='upload__wrapper__img-container'>
          {spinner ? (
            <MoonLoader size={100} />
          ) : (
            <img
              className='uploading'
              onClick={handleImageClick}
              src={image}
              alt='abc'
            />
          )}
        </div>
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {spinner ? (
          <p>Uploading artifact. Please wait.</p>
        ) : (
          <p>Please Upload the artifacts Zip file</p>
        )}
      </div>
    </div>
  );
};
