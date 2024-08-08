import React, { useState } from "react";
import {
  useDeleteBlogsMutation,
  useGetBlogsQuery,
} from "../../../context/api/blogsApi";
import { Button, Modal, Card, Form, Input } from "antd";
const ManageBlog = () => {
  const { data } = useGetBlogsQuery();
  const [deleteBlogs] = useDeleteBlogsMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values) => {
    SignIn(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex gap-4 p-8 flex-wrap">
      {data?.payload?.map((el) => (
        <Card
          title={el?.userId?.username}
          bordered={false}
          style={{
            width: 280,
          }}
        >
          <p>{el?.title}</p>
          <p>{el?.desc}</p>
          <p>Card content</p>
          <div className="flex gap-2 my-2">
            <button
              onClick={showModal}
              className="bg-black py-1 px-5 rounded-lg text-slate-200"
            >
              edit
            </button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div className=" flex items-center  flex-col gap-4">
                <h2 className="text-2xl font-medium">Updete Blog</h2>
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
            <button
              onClick={() => deleteBlogs(el?._id)}
              className="bg-black py-1 px-5 rounded-lg text-slate-200"
            >
              delete
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default ManageBlog;
