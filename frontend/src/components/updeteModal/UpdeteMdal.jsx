import React, { useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useUpdateBlogsMutation } from "../../context/api/blogsApi";

const UpdeteMdal = ({ handleCancel, modalOpen }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [updeteBlog, { isSuccess }] = useUpdateBlogsMutation();

  const onFinish = (values) => {
    updeteBlog({ body: values, id: modalOpen._id });
  };

  useEffect(() => {
    if (isSuccess) {
      handleCancel();
    }
  }, [isSuccess]);

  return (
    <div>
      <Modal open={modalOpen} onCancel={handleCancel} footer={false}>
        <div className=" flex items-center  flex-col gap-4">
          <h2 className="text-2xl font-medium">Updete Blog</h2>
          <Form
            name="basic"
            layout="vertical"
            className="w-96 max-sm:w-full"
            initialValues={{
              remember: true,
              title: modalOpen?.title,
              desc: modalOpen?.desc,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your title!",
                },
              ]}
            >
              <Input placeholder="title" />
            </Form.Item>

            <Form.Item
              label="descreption"
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Please input your descreption!",
                },
              ]}
            >
              <Input placeholder="descreption" />
            </Form.Item>

            <Form.Item>
              <Button className="w-full" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default UpdeteMdal;
