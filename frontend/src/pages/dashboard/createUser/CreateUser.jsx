import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useRegisterUserMutation } from "../../../context/api/userApi";

const { Option } = Select;

const CreateUser = () => {
  const [createUser] = useRegisterUserMutation();

  const handleCreate = (values) => {
    // 'values' will include the 'gender' field if selected
    createUser(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-sm:p-2 flex mx-6 flex-col gap-2">
      <h2 className="text-xl font-medium">Create User</h2>
      <Form
        name="basic"
        layout="vertical"
        className="w-96"
        initialValues={{
          remember: true,
        }}
        onFinish={handleCreate}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="fname"
          rules={[
            {
              required: true,
              message: "Please input your first name",
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          label="Url"
          name="url"
          rules={[
            {
              required: true,
              message: "Please input your url",
            },
          ]}
        >
          <Input placeholder="url" />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lname"
          rules={[
            {
              required: true,
              message: "Please input your lname",
            },
          ]}
        >
          <Input placeholder="lname" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item
          label="Budget"
          name="budget"
          rules={[
            {
              required: true,
              message: "Please input your budget",
            },
          ]}
        >
          <Input placeholder="Budget" />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please select your gender",
            },
          ]}
        >
          <Select placeholder="Select Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUser;
