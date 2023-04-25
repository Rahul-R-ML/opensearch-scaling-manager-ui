import React, { useState } from 'react'
import './Upload.css'
import image from '../../assets/upload.jpg'

export const UploadFile = () => {

  return (
    <div className='container'>
        <img className='uploadimg' src= {image} alt='abc'/>
        <p className='text'>Please Upload the artifacts Zip file</p>
    </div>
  )
}
