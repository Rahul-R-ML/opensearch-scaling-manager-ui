import React, { useRef } from 'react';
import './File.css';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Populate } from './Populate/Populate';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {
  Install,
  Uninstall,
  Start,
  Stop,
  Updateconfig,
  Updatepem,
} from '../../services/service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const File = () => {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [playButton, setPlayButton] = useState(true);

  async function playOpenSearch() {
    setPlayButton(false);
    await Start();
  }
  async function pauseOpenSearch() {
    setPlayButton(true);
    await Stop();
  }

  return (
    <div className='file__wrapper'>
      <div className='file__wrapper-topbar'>
        <p>&#60;&#60;FileName&#62;&#62;</p>
        <div onClick={Uninstall}>
          <DeleteIcon className='file__wrapper_delete' />
        </div>
      </div>
      <div className='file__wrapper-play'>
        {playButton ? (
          <PlayCircleIcon
            onClick={playOpenSearch}
            style={{ fontSize: 200, color: 'green' }}
          />
        ) : (
          <StopCircleIcon
            onClick={pauseOpenSearch}
            style={{ fontSize: 200, color: 'red' }}
          />
        )}
        <div className='playtext'>
          {playButton ? 'Yet To Start' : 'Running'}
        </div>
      </div>
      <div className='button-group'>
        <div className='sample'>
          <button
            type='button'
            className='btn btn-outline-primary text-nowrap'
            onClick={Updateconfig}
          >
            Update configuration
          </button>

          <button
            type='button'
            className='btn btn-outline-primary  text-nowrap'
            onClick={Updatepem}
          >
            Update PME file
          </button>
        </div>
        <div className='sample'>
          <button type='button' className='btn btn-primary' onClick={Install}>
            Install
          </button>

          <button
            type='button'
            className='btn btn-primary'
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Populate
          </button>
          {openModal && (
            <div ref={modalRef}>
              <Populate closeModal={setOpenModal} />{' '}
            </div>
          )}
          <div className='modal'></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
