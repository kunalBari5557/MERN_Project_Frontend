import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader } from '../Components/GoBack';
import AdminLoginMiddleware from '../Components/Middleware/Admin/login';
import AdminLogin from '../pages/Login/login';
import AdminMiddleware from '../Components/Middleware/Admin';
import AdminLayout from '../Layout/Admin_Dashboard';
import AdminDashboard from '../pages/Dashboard';
import ProductList from '../pages/ProductList/ProductList';
import UsersManagement from '../pages/UsersManagement/UsersManagement';
import Page_Not_Found from '../Components/404_page';
import ProductListEdit from '../pages/ProductList/EditProductList';
import ViewProductDetails from '../pages/ProductList/ViewProductDetails';
import AddProduct from '../pages/ProductList/AddProductList';
import UserList from '../pages/UsersManagement/UsersManagement';
import ViewUserDetails from '../pages/UsersManagement/ViewUserDetails';
import UserListEdit from '../pages/UsersManagement/EditUserList';
import UserListAdd from '../pages/UsersManagement/AddUserList';
const Admin_Routes = () => {

    return (
        <BrowserRouter>
        <Routes>
          <Route element={<AdminLoginMiddleware />}>
            <Route path="/" element={<AdminLogin />} />
          </Route>
          <Route element={<AdminMiddleware />}>
            <Route element={<AdminLayout />} path="/admin/">
              <Route path="users" element={<UsersManagement />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="product" element={<ProductList />} />
              <Route path="product/edit" element={<ProductListEdit />} />
              <Route path="product/details" element={<ViewProductDetails />} />
              <Route path="product/add" element={<AddProduct />} />
              <Route path="user" element={<UserList />} />
              <Route path="user/details" element={<ViewUserDetails />} />
              <Route path="user/edit" element={<UserListEdit />} />
              <Route path="user/add" element={<UserListAdd />} />
            </Route>
          </Route>
          
          <Route path="*" element={<Page_Not_Found />} />
        </Routes>
      </BrowserRouter>
    )

}
export default Admin_Routes