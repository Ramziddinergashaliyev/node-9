import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSignInMutation } from "../../context/api/userApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../../context/slices/authSlice";
const SignIn = () => {
  const [SignIn, { data, isSuccess, error }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.payload.token));
      dispatch(setUser(data.payload.user));
      navigate("/dashboard");
    }
  }, [isSuccess]);

  const handleSubmit = (values) => {
    SignIn(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-sm:p-4 flex items-center justify-center min-h-screen flex-col gap-4">
      <h2 className="text-2xl font-medium">Sign In</h2>
      <Form
        name="basic"
        layout="vertical"
        className="w-96 max-sm:w-full"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="password" />
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

export default SignIn;
