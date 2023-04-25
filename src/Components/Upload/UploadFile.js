import React, { useRef, useState } from "react";
import "./Upload.css";
import image from "../../assets/upload.jpg";

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
    <div className="container">
      <img
        className="uploadimg"
        onClick={handleImageClick}
        src={image}
        alt="abc"
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <p className="text">Please Upload the artifacts Zip file</p>
    </div>
  );
};
