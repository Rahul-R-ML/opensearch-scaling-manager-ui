import React, { useEffect, useRef } from "react";
import "./File.css";
import image from "../../assets/play.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Populate } from "./Populate/Populate";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

export const File = () => {
  const modalRef = useRef(null);

  const [openModal, setOpenModal] = useState(false);
  const [playButton, setPlayButton] = useState(true);

  useEffect(() => {
    if (openModal && modalRef.current) {
      modalRef.current.focus();
      console.log("modal");
    }
  }, [openModal]);

  function playpause() {
    setPlayButton(!playButton);
  }

  return (
    <div className="container">
      <div className="topbar">
        <p className="filename">FileName</p>
        <div className="deleteIcon">
          <DeleteIcon></DeleteIcon>
        </div>
      </div>
      <div className="playimg">
        {playButton ? (
          <PlayCircleIcon
            onClick={playpause}
            style={{ fontSize: 100, color: "green" }}
          />
        ) : (
          <PauseCircleFilledIcon
            onClick={playpause}
            style={{ fontSize: 100, color: "red" }}
          />
        )}
      </div>
      <div className="playtext">{playButton ? "Yet To Start" : "Running"}</div>
      <div>
        <button type="button" className="btn btn-outline-primary">
          Upload Configuration
        </button>
        <button type="button" className="btn btn-primary">
          Install
        </button>
        <button type="button" className="btn btn-outline-primary">
          Upload PME File
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Populate
        </button>
        {/* {openModal && <Populate closeModal={setOpenModal} />} */}
        {openModal && <div ref={modalRef}> <Populate closeModal={setOpenModal} /> </div>}
        <div className="modal" >
          
        </div>
      </div>
    </div>
  );
};
