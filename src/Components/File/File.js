import React from "react";
import "./File.css";
import image from "../../assets/play.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Populate } from "./Populate/Populate";

export const File = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container">
      <div className="topbar">
        <p className="filename">FileName</p>
        <div className="deleteIcon">
          <DeleteIcon></DeleteIcon>
        </div>
      </div>
      <img className="playimg" src={image} alt="loading" />
      <p className="playtext">yet to start</p>
      <div >
        <button type="button" class="btn btn-outline-primary">
          upload configuration
        </button>
        <button type="button" class="btn btn-primary">
          Install
        </button>
        <button type="button" class="btn btn-outline-primary">
          upload PME file
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Populate
        </button>
        {openModal && <Populate closeModal={setOpenModal} />}
      </div>
    </div>
  );
};
