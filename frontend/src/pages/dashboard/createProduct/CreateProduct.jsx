import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useRegisterUserMutation } from "../../../context/api/userApi";
import { useCreateProductMutation } from "../../../context/api/productApi";

const { Option } = Select;

const CreateUser = () => {
  const [createProduct] = useCreateProductMutation();

  const handleCreate = (values) => {
    createProduct(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-sm:p-2 flex mx-6 flex-col gap-2">
      <h2 className="text-xl font-medium">Create Produxt</h2>
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
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your title",
            },
          ]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          label="Descretion"
          name="desc"
          rules={[
            {
              required: true,
              message: "Please input your desc",
            },
          ]}
        >
          <Input placeholder="desc" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your price",
            },
          ]}
        >
          <Input placeholder="Price" />
        </Form.Item>

        <Form.Item
          label="Old Price"
          name="oldPrice"
          rules={[
            {
              required: true,
              message: "Please input your Old Price",
            },
          ]}
        >
          <Input placeholder="price" />
        </Form.Item>
        <Form.Item
          label="info"
          name="info"
          rules={[
            {
              required: true,
              message: "Please input your info",
            },
          ]}
        >
          <Input placeholder="info" />
        </Form.Item>

        <Form.Item
          label="category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input your category",
            },
          ]}
        >
          <Input placeholder="category" />
        </Form.Item>

        <Form.Item
          label="rating"
          name="rating"
          rules={[
            {
              required: true,
              message: "Please select your rating",
            },
          ]}
        >
          <Input placeholder="rating" />
        </Form.Item>
        <Form.Item
          label="urls"
          name="urls"
          rules={[
            {
              required: true,
              message: "Please select your urls",
            },
          ]}
        >
          <Input placeholder="urls" />
        </Form.Item>
        <Form.Item
          label="available"
          name="available"
          rules={[
            {
              required: true,
              message: "Please select your available",
            },
          ]}
        >
          <Input placeholder="available" />
        </Form.Item>
        <Form.Item
          label="stock"
          name="stock"
          rules={[
            {
              required: true,
              message: "Please select your stock",
            },
          ]}
        >
          <Input placeholder="stock" />
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
