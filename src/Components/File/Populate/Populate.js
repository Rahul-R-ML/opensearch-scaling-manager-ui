import "./Populate.css";

export const Populate = ({ closeModal }) => {

  return (
    <div className="populate-background">
      <div className="populate">
        <p className="title">Populate</p>
        <div className="form">
          <label className="formText">Master Ip</label>
          <div className="inputText">
            <input className="input" type="text" />
          </div>
          <label className="formText">OS Username</label>
          <div className="inputText">
            <input className="input" type="text" />
          </div>
          <label className="formText">OS Password</label>
          <div className="inputText">
            <input className="input" type="password" />
          </div>
          <div className="btn-populate">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => closeModal(false)}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Populate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
