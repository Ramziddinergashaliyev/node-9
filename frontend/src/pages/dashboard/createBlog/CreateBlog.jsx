import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useCreateBlogsMutation } from "../../../context/api/blogsApi";

const CreateBlog = () => {
  const [createBlog] = useCreateBlogsMutation();

  const handleCreate = (values) => {
    createBlog(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-sm:p-4 flex mx-6 min-h-screen flex-col gap-4">
      <h2 className="text-2xl font-medium">Create Blog</h2>
      <Form
        name="basic"
        layout="vertical"
        className="w-96 max-sm:w-full"
        initialValues={{
          remember: true,
        }}
        onFinish={handleCreate}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Title kiriting",
            },
          ]}
        >
          <Input placeholder="title" />
        </Form.Item>

        <Form.Item
          label="Descreption"
          name="desc"
          rules={[
            {
              required: true,
              message: "descreption kiriting",
            },
          ]}
        >
          <Input placeholder="desc" />
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

export default CreateBlog;
