import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductSchema } from "../../ValidationSchema";
// import { EmployerUpdateSchema } from '../../../Validation Schema';

interface Employer {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rate_id: string;
}

const AddProduct = () => {
  const Navigate = useNavigate();

  const [initialValues, setInitialValues] = useState<Employer>({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rate_id: "1",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const users = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: ProductSchema,

    onSubmit: (values: Employer, action: any) => {
      if (selectedFile) {
        let formData = new FormData();
        formData.append("title", values.title); //append the values with key, value pair
        formData.append("price", values.price); //append the values with key, value pair
        formData.append("description", values.description);
        formData.append("category", values.category);
        formData.append("image", values.image);
        formData.append("rate_id", values.rate_id);

        axios
          .post(`${process.env.REACT_APP_URL}/admin/add`, formData, {
            headers: { token: `${localStorage.getItem("Token")}` },
          })
          .then((res) => {
            if (res.status === 200) {
              Navigate("/admin/product", { state: res.data.msg });
            }
          })
          .catch((err) => {
            toast.error(err.response.data.msg);
            // Navigate('/admin/users');
          });
      }
    },
  });

  return (
    <>
      <div className="w-100">
        <div className="breadcrumb-two mb-3 d-flex justify-content-between">
          <ul className="breadcrumb">
            <Toaster position="top-center" reverseOrder={false} />
            <li className="active">
              <a href="##">
                <h5 className="mb-0 text-white">Add Products</h5>
              </a>
            </li>
            <li>
              <a href="##">.</a>
            </li>
          </ul>
        </div>

        <div className="statbox widget box box-shadow">
          <div className="widget-content widget-content-area p-0 box-shadow-none">
            <div className="row">
              <div className="col-lg-6 col-12">
                <form onSubmit={users.handleSubmit}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Title"
                      value={users.values.title}
                      onChange={users.handleChange}
                      onBlur={users.handleBlur}
                      name="title"
                    />
                  </div>
                  {users.errors.title && users.touched.title ? (
                    <h6 className="text-danger mt-2 ml-1">
                      {users.errors.title}
                    </h6>
                  ) : null}

                  <div className="form-group">
                    <label>Price</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Price"
                      value={users.values.price}
                      onChange={users.handleChange}
                      onBlur={users.handleBlur}
                      name="price"
                    />
                  </div>
                  {users.errors.price && users.touched.price ? (
                    <h6 className="text-danger mt-2 ml-1">
                      {users.errors.price}
                    </h6>
                  ) : null}

                  <div className="form-group">
                    <label>Description</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Description"
                      value={users.values.description}
                      onChange={users.handleChange}
                      onBlur={users.handleBlur}
                      name="description"
                    />
                  </div>
                  {users.errors.description && users.touched.description ? (
                    <h6 className="text-danger mt-2 ml-1">
                      {users.errors.description}
                    </h6>
                  ) : null}

                  <div className="form-group">
                    <label>Category</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Category"
                      value={users.values.category}
                      onChange={users.handleChange}
                      onBlur={users.handleBlur}
                      name="category"
                    />
                  </div>
                  {users.errors.category && users.touched.category ? (
                    <h6 className="text-danger mt-2 ml-1">
                      {users.errors.category}
                    </h6>
                  ) : null}

                  <div className="form-group">
                    <label>RateId</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter RateId"
                      value={users.values.rate_id}
                      onChange={users.handleChange}
                      onBlur={users.handleBlur}
                      name="rate_id"
                    />
                  </div>
                  {users.errors.rate_id && users.touched.rate_id ? (
                    <h6 className="text-danger mt-2 ml-1">
                      {users.errors.rate_id}
                    </h6>
                  ) : null}

                  {/* <div className="form-group">
                    <label>Profile</label>
                    <label className="custom-file-container__custom-file mt-0">
                      <input
                        type="file"
                        className="custom-file-container__custom-file__custom-file-input"
                        name="profile"
                        onChange={(e) =>
                          users.setFieldValue(
                            "profile",
                            e.target.files && e.target.files[0]
                          )
                        }
                        onBlur={users.handleBlur}
                        accept="image/*"
                      />
                      <span className="custom-file-container__custom-file__custom-file-control outline-none">
                        Choose Profile...
                        <span className="custom-file-container__custom-file__custom-file-control__button">
                          {" "}
                          Browse{" "}
                        </span>
                      </span>
                    </label>
                  </div> */}

                  <div className="form-group">
                    <label>Profile</label>
                    <label className="custom-file-container__custom-file mt-0">
                      <input
                        type="file"
                        className="custom-file-container__custom-file__custom-file-input"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                      <span className="custom-file-container__custom-file__custom-file-control outline-none">
                        {selectedFile ? selectedFile.name : "Choose Profile..."}
                        <span className="custom-file-container__custom-file__custom-file-control__button">
                          {" "}
                          Browse{" "}
                        </span>
                      </span>
                    </label>
                  </div>

                  {users.errors.image && users.touched.image ? (
                    <h6 className="text-danger mt-2 ml-1">
                      {users.errors.image}
                    </h6>
                  ) : null}

                  <div className="form-group mb-1">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
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

export default AddProduct;
