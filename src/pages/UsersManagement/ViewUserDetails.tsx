import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewUserDetails = () => {
  const location = useLocation();
  const stateData = location.state;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-100">
        <div className="breadcrumb-two mb-3 d-flex justify-content-between">
          <ul className="breadcrumb">
            <li className="active">
              <a href="##">
                <h5 className="mb-0 text-white">Users Details</h5>
              </a>
            </li>
            <li>
              <a href="##">.</a>
            </li>
          </ul>
        </div>
        <div className="statbox widget box box-shadow">
          <div className="widget-content widget-content-area p-0 box-shadow-none">
            <div className="row col-lg-12 col-12">
              <div className="col-lg-4 col-4">
                <form>
                  <div className="form-group">
                    <label>Firstname</label>
                  </div>

                  <div className="form-group">
                    <label>Lastname</label>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                  </div>

                  <div className="form-group">
                    <label>Username</label>
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-4">
                <form>
                  <div className="form-group">
                    <label>{stateData.name.firstname}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.name.lastname}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.email}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.username}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.phone}</label>
                  </div>

                  <div className="form-group">
                    <label>
                      <span className="password-text">
                        {showPassword ? stateData.password : "••••••••••"}
                      </span>
                      <span className="eye-icon" onClick={togglePasswordVisibility}>
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 8.48 2 12s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-6h2v2h-2zm1-11.75c-2.89 0-5.49 1.47-7 3.69c0.43 0.63 2.18 3.31 7 5.31c4.82-2 6.57-4.68 7-5.31c-1.51-2.22-4.11-3.69-7-3.69zm0 5c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 7.35l-1.53 1.53l1.42 1.42L12 10.18zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" />            </svg>
                        )}
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUserDetails;
