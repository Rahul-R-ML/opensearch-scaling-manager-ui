import { useState } from 'react';
import { validateIp } from '../../../utils/validators';
import { Populatedata } from '../../../services/service';

import './Populate.css';
export const Populate = ({ closeModal }) => {
  const [ipError, setIpError] = useState('');
  const [formData, setFormData] = useState({
    ip: '',
    osUsername: '',
    osPassword: '',
  });

  async function handleFormSubmit (event){
    event.preventDefault();
    // send API request here
    const response = await Populatedata(formData);
    console.log(formData);
  };
  
  return (
    <div className='populate__overlay'>
      <div className='populate'>
        <p className='title'>Populate</p>
        <div className='populate__form'>
          <form onSubmit={handleFormSubmit}>
            <div className='form-group text-nowrap'>
              <label className='text-left'>Master IP</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) =>
                  setFormData({ ...formData, ip: e.target.value })
                }
                value={formData.ip}
                onBlur={() => {
                  if (formData.ip != '') {
                    if (!validateIp(formData.ip)) {
                      return setIpError('Please enter a valid IP address');
                    }
                    setIpError('');
                  }
                }}
              />
              {ipError && <div className='text-danger'>{ipError}</div>}
            </div>
            <div className='form-group text-nowrap'>
              <label className='text-left'>OS Username</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, osUsername: e.target.value })
                }
                value={formData.osUsername}
                type='text'
                className='form-control'
                required
              />
            </div>
            <div className='form-group text-nowrap'>
              <label className='text-left'>OS Password </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, osPassword: e.target.value })
                }
                value={formData.osPassword}
                type='password'
                className='form-control'
                required
              />
            </div>
            <div className='btn-populate'>
              <button
                type='button'
                className='btn btn-outline-primary'
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
              <button type='submit' className='btn btn-primary'>
                Populate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
