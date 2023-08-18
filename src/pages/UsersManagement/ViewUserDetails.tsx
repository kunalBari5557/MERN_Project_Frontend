import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewUserDetails = () => {
  const location = useLocation();
  const stateData = location.state;

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
                    <label>{stateData.password}</label>
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
