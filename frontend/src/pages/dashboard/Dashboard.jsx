import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "../../context/api/userApi";
import { useDispatch } from "react-redux";
import { logout } from "../../context/slices/authSlice";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const { data } = useGetProfileQuery();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    dispatch(logout());
  };

  const { pathname } = useLocation();

  const isOwner = data?.payload?.role === "owner";

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sticky top-0 left-0 h-screen">
          <div>
            <h2 className="px-8 py-4 text-2xl text-white">
              {data?.payload?.fname}
            </h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["createBlog"]}
            selectedKeys={pathname.split("/").slice(-1)[0]}
            items={[
              {
                key: "createBlog",
                icon: (
                  <NavLink to={"/dashboard/createBlog"}>
                    <UserOutlined />
                  </NavLink>
                ),
                label: "Create Blog",
              },
              {
                key: "manageBlog",
                icon: (
                  <NavLink className="text-slate-50 text-md" to={"manageBlog"}>
                    <VideoCameraOutlined />
                  </NavLink>
                ),
                label: "Manage Blog",
              },
              isOwner && {
                key: "createUser",
                icon: (
                  <NavLink to={"/dashboard/createUser"}>
                    <UserOutlined />
                  </NavLink>
                ),
                label: "Create User",
              },
              isOwner && {
                key: "manageUser",
                icon: (
                  <NavLink className="text-slate-50 text-md" to={"manageUser"}>
                    <VideoCameraOutlined />
                  </NavLink>
                ),
                label: "Manage User",
              },
              {
                key: "createProduct",
                icon: (
                  <NavLink to={"/dashboard/createProduct"}>
                    <UserOutlined />
                  </NavLink>
                ),
                label: "Create Product",
              },
              {
                key: "manageProduct",
                icon: (
                  <NavLink
                    className="text-slate-50 text-md"
                    to={"manageProduct"}
                  >
                    <VideoCameraOutlined />
                  </NavLink>
                ),
                label: "Manage Product",
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: "Logout",
                onClick: handleLogout,
              },
            ].filter(Boolean)}
          />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
