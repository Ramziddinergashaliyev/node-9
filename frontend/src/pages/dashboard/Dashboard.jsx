import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useGetProfileQuery } from "../../context/api/userApi";
import { useDispatch } from "react-redux";
import { logout } from "../../context/slices/authSlice";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const dispat = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const { data } = useGetProfileQuery();
  console.log(data);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    dispat(logout());
  };
  return (
    <Layout>
      <Sider
        className="h-screen"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <div>
          <div>
            <h2 className="px-8 py-4 text-2xl text-white">
              {data?.payload?.fname}
            </h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <NavLink to={"/dashboard/createBlog"}>
                    <UserOutlined />
                  </NavLink>
                ),
                label: "Create Blog",
              },
              {
                key: "2",
                icon: (
                  <NavLink className="text-slate-50 text-md" to={"manageBlog"}>
                    <VideoCameraOutlined />
                  </NavLink>
                ),
                label: "Manage Blog",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Logout",
                onClick: handleLogout,
              },
            ]}
          />
        </div>
      </Sider>
      <Layout>
        <div>
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
        </div>
        <Outlet
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Outlet>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
