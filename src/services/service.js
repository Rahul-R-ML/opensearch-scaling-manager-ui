import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const BASE_URL = 'http://127.0.0.1:5000';

export async function Upload(props) {
  await axios.post(`${BASE_URL}/upload`, props.file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function populate(props) {
  try {
    await axios.post(`${BASE_URL}/populate`, props.formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  catch (err) {
    toast.error(err);
  }

}

export async function Install() {
  try {
    const response = await axios
      .get(`${BASE_URL}/install`)
    return async function Status() {
      try {
        const result = await axios
          .get(`${BASE_URL}/status`)
        return result.data;
      } catch (err) {
        toast.error(err);
      }
    };
  } catch (err) {
    toast.error(err);
  }
}

export async function Start() {
  try {
    const response = await axios
      .get(`${BASE_URL}/start`)
    return async function Status() {
      try {
        const result = await axios
          .get(`${BASE_URL}/status`)
        return result.data;
      } catch (err) {
        toast.error(err);
      }
    };
  } catch (err) {
    toast.error(err);
  }
}

export async function Stop() {
  try {
    const response = await axios
      .get(`${BASE_URL}/stop`)
    return async function Status() {
      try {
        const result = await axios
          .get(`${BASE_URL}/status`)
        return result.data;
      } catch (err) {
        toast.error(err);
      }
    };
  } catch (err) {
    toast.error(err);
  }
}

export async function Uninstall() {
  try {
    const response = await axios
      .get(`${BASE_URL}/uninstall`)
    return async function Status() {
      try {
        const result = await axios
          .get(`${BASE_URL}/status`)
        return result.data;
      } catch (err) {
        toast.error(err);
      }
    };
  } catch (err) {
    toast.error(err);
  }
}

export async function Updateconfig() {
  try {
    const response = await axios
      .get(`${BASE_URL}/update_config`)
    return async function Status() {
      try {
        const result = await axios
          .get(`${BASE_URL}/status`)
        return result.data;
      } catch (err) {
        toast.error(err);
      }
    };
  } catch (err) {
    toast.error(err);
  }
}

export async function Updatepem() {
  try {
    const response = await axios
      .get(`${BASE_URL}/update_pem`)
    return async function Status() {
      try {
        const result = await axios
          .get(`${BASE_URL}/status`)
        return result.data;
      } catch (err) {
        toast.error(err);
      }
    };
  } catch (err) {
    toast.error(err);
  }
}

export async function Status() {
  try{
    const response = await axios.get(`${BASE_URL}/status`)
    return response.data;
  }
  catch (err){
    toast.error(err);
  }
}