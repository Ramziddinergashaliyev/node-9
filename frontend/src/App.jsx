import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/dashboard/createBlog/CreateBlog";
import ManageBlog from "./pages/dashboard/manageBlog/ManageBlog";
import { useSelector } from "react-redux";
import CreateUser from "./pages/dashboard/createUser/CreateUser";
import ManageUser from "./pages/dashboard/manageUser.jsx/ManageUser";
const Home = lazy(() => import("./pages/home/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const Auth = lazy(() => import("./pages/auth/Auth"));

const App = () => {
  let token = useSelector((state) => state.auth.token);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
        />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="createBlog" element={<CreateBlog />} />
            <Route path="manageBlog" element={<ManageBlog />} />
            <Route path="createUser" element={<CreateUser />} />
            <Route path="manageUser" element={<ManageUser />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
