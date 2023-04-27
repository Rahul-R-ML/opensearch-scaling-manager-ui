import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/upload.jpg';
import './Upload.css';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { Upload } from '../../services/service';

export const UploadFile = () => {
  const [spinner, setSpinner] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  function handleImageClick() {
    fileInputRef.current.click();
  }

  function uploadFile(formData) {
    setSpinner(true);
    Upload(formData)
      .then((response) => {
        if (response) navigate('/file');
      })
      .finally(() => {
        setSpinner(false);
      });
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    // debug mode
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
    uploadFile(formData);
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
