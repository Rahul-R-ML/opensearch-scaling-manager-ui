import { useState } from "react";
import "./Populate.css";

export const Populate = ({ closeModal }) => {

  const [ipAddress, setIpAddress] = useState("");
  const [ipError, setIpError] = useState("");
  const ipPattern = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

  const populate = (event) => {
    event.preventDefault();
    let formData={
      ip: event.target[0].value,
      name:event.target[1].value,
      password: event.target[2].value
    }
    console.log(formData)
  }

  return (
    <div className="populate__overlay">
      <div className="populate">
        <p className="title">Populate</p>
        <div className="populate__form">
          <form onSubmit={populate}>
            <div className="form-group text-nowrap">
              <label className="text-left">Master IP</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setIpAddress(e.target.value)}
                onBlur={() => {
                  if(ipAddress!=''){
                    if (!ipPattern.test(ipAddress)) {
                      setIpError("Please enter a valid IP address");
                    } else {
                      setIpError(false);
                    }
                  }
                }}
              />
              {ipError && <div className="text-danger">{ipError}</div>}
            </div>
            <div className="form-group text-nowrap">
              <label className="text-left">OS Username</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group text-nowrap">
              <label className="text-left">Os Password </label>
              <input type="password" className="form-control" required />
            </div>
            <div className="btn-populate">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Populate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
