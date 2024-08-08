import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/dashboard/createBlog/CreateBlog";
import ManageBlog from "./pages/dashboard/manageBlog/ManageBlog";
const Home = lazy(() => import("./pages/home/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const Auth = lazy(() => import("./pages/auth/Auth"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="createBlog" element={<CreateBlog />} />
            <Route path="manageBlog" element={<ManageBlog />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
