import "./Populate.css";

export const Populate = ({ closeModal }) => {
  return (
    <div className="populate__overlay">
      <div className="populate">
        <p className="title">Populate</p>
        <div className="populate__form">
          <form>
            <div className="form-group text-nowrap">
              <label className="text-left">Master IP</label>
              <input type="text" className="form-control" required pattern="\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b"/>
            </div>
            <div className="form-group text-nowrap">
              <label className="text-left">OS Username</label>
              <input type="text" className="form-control" required/>
            </div>
            <div className="form-group text-nowrap">
              <label className="text-left">Os Password </label>
              <input type="password" className="form-control" required/>
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
          </form>
        </div>
      </div>
    </div>
  );
};
