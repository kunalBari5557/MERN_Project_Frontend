import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { UserUpdateSchema } from "../../ValidationSchema";

interface Users {
    name: {
        firstname: string;
        lastname: string;
    };
    username: string;
    email: string;
    password: string;
    phone: string;
}

const UserListEdit = () => {
    const location = useLocation();
    const stateData = location.state;
    const Navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const users = useFormik<Users>({
        initialValues: {
            name: {
                firstname: stateData.name.firstname,
                lastname: stateData.name.lastname,
            },
            username: stateData.username,
            email: stateData.email,
            password: stateData.password,
            phone: stateData.phone,
        },
        enableReinitialize: true,
        validationSchema: UserUpdateSchema,

        onSubmit: async (values: Users) => {

            try {
                const response = await axios.put(
                    `${process.env.REACT_APP_URL}/admin/user/update/${stateData.id}`,
                    values, // Send the values directly as the request body
                    {
                        headers: {
                            token: `${localStorage.getItem("Token")}`,
                            "Content-Type": "application/json", // Set the content type to JSON
                        },
                    }
                );

                if (response.status === 200) {
                    Navigate("/admin/users", { state: response.data.msg });
                }
            } catch (err: any) {
                toast.error(err.response.data.msg);
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
                                <h5 className="mb-0 text-white">Edit Products</h5>
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
                                        <label>Firstname</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Firstname"
                                            value={users.values.name.firstname} // Use users.values.name.firstname
                                            onChange={users.handleChange}
                                            onBlur={users.handleBlur}
                                            name="name.firstname" // Use "name.firstname" for the nested property
                                        />
                                    </div>
                                    {users.errors.name?.firstname && users.touched.name?.firstname ? (
                                        <h6 className="text-danger mt-2 ml-1">
                                            {users.errors.name.firstname}
                                        </h6>
                                    ) : null}


                                    <div className="form-group">
                                        <label>Lastname</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Lastname"
                                            value={users.values.name.lastname}
                                            onChange={users.handleChange}
                                            onBlur={users.handleBlur}
                                            name="name.lastname"
                                        />
                                    </div>
                                    {users.errors.name?.lastname && users.touched.name?.lastname ? (
                                        <h6 className="text-danger mt-2 ml-1">
                                            {users.errors.name.lastname}
                                        </h6>
                                    ) : null}

                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Username"
                                            value={users.values.username}
                                            onChange={users.handleChange}
                                            onBlur={users.handleBlur}
                                            name="username"
                                        />
                                    </div>
                                    {users.errors.username && users.touched.username ? (
                                        <h6 className="text-danger mt-2 ml-1">
                                            {users.errors.username}
                                        </h6>
                                    ) : null}

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Enter Email"
                                            value={users.values.email}
                                            onChange={users.handleChange}
                                            onBlur={users.handleBlur}
                                            name="email"
                                        />
                                    </div>
                                    {users.errors.email && users.touched.email ? (
                                        <h6 className="text-danger mt-2 ml-1">
                                            {users.errors.email}
                                        </h6>
                                    ) : null}

                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            className="form-control"
                                            type="phone"
                                            placeholder="Enter Phone"
                                            value={users.values.phone}
                                            onChange={users.handleChange}
                                            onBlur={users.handleBlur}
                                            name="phone"
                                        />
                                    </div>
                                    {users.errors.phone && users.touched.phone ? (
                                        <h6 className="text-danger mt-2 ml-1">
                                            {users.errors.phone}
                                        </h6>
                                    ) : null}

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Password"
                                            value={users.values.password}
                                            onChange={users.handleChange}
                                            onBlur={users.handleBlur}
                                            name="password"
                                        />
                                    </div>
                                    {users.errors.password && users.touched.password ? (
                                        <h6 className="text-danger mt-2 ml-1">
                                            {users.errors.password}
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

export default UserListEdit;
