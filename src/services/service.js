import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const BASE_URL = 'http://127.0.0.1:5000';
export const BASE_URL =
  'http://ec2-34-209-116-102.us-west-2.compute.amazonaws.com:5000';

export async function Upload(formData) {
  try {
    await axios.post(`${BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'application/zip',
      },
    });
    return { status: 'success' };
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Populatedata(props) {
  try {
    await axios.post(`${BASE_URL}/populate`, props.formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Install() {
  try {
    toast.promise(axios.get(`${BASE_URL}/install`), {
      pending: 'Installing...',
      success: 'Installed Successfully',
      error: 'Error while installing',
    });
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Start() {
  try {
    toast.success('started');
    const response = await axios.get(`${BASE_URL}/start`);
    return response.data;
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Stop() {
  try {
    toast.success('stopped');
    const response = await axios.get(`${BASE_URL}/stop`);
    return response.data;
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Uninstall() {
  try {
    const response = await axios.get(`${BASE_URL}/uninstall`);
    toast.success('Uninstalled Successfully');
    return response.data;
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Updateconfig() {
  try {
    const response = await axios.get(`${BASE_URL}/update_config`);
    return response.data;
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Updatepem() {
  try {
    const response = await axios.get(`${BASE_URL}/update_pem`);
    return response.data;
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}

export async function Status() {
  try {
    const response = await axios.get(`${BASE_URL}/status`);
    return response.data;
  } catch (err) {
    toast.error(err.message, { position: 'top-center' });
  }
}
