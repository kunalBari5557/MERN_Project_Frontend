import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewProductDetails = () => {
  const location = useLocation();
  const stateData = location.state;

  return (
    <>
      <div className="w-100">
        <div className="breadcrumb-two mb-3 d-flex justify-content-between">
          <ul className="breadcrumb">
            <li className="active">
              <a href="##">
                <h5 className="mb-0 text-white">Details Products</h5>
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
                    <label>Title</label>
                  </div>

                  <div className="form-group">
                    <label>Price</label>
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                  </div>

                  <div className="form-group">
                    <label>Category</label>
                  </div>

                  <div className="form-group">
                    <label>Image</label>
                  </div>

                  <div className="form-group">
                    <label>Rate_Id</label>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-4">
                <form>
                  <div className="form-group">
                    <label>{stateData.title}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.price}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.description}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.category}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.image}</label>
                  </div>

                  <div className="form-group">
                    <label>{stateData.rate_id}</label>
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

export default ViewProductDetails;
