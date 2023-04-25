import React from 'react'
import image from '../../assets/Loading_2.gif'
import './Load.css';

export const Load = () => {
  return (
    <div className='container'>
        <img className ='loadingimg' src={image} alt='loading' />
        <p className='text'>Uploading artifact. Please wait.</p>
    </div>
  )
}