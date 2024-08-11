import React, { useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useUpdateUsersMutation } from "../../context/api/userApi";

const UserUpdete = ({ handleCancel, modalOpen }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [updeteUsers, { isSuccess }] = useUpdateUsersMutation();

  const onFinish = (values) => {
    updeteUsers({ body: values, id: modalOpen._id });
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
            layout="gorizantal"
            className="w-96 max-sm:w-full"
            initialValues={{
              remember: true,
              fname: modalOpen?.fname,
              lname: modalOpen?.lname,
              url: modalOpen?.url,
              username: modalOpen?.username,
              budget: modalOpen?.budget,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="fname"
              rules={[
                {
                  required: true,
                  message: "Please input your fname!",
                },
              ]}
            >
              <Input placeholder="fname" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lname"
              rules={[
                {
                  required: true,
                  message: "Please input your lname!",
                },
              ]}
            >
              <Input placeholder="lname" />
            </Form.Item>
            <Form.Item
              label="Url"
              name="url"
              rules={[
                {
                  required: true,
                  message: "Please input your url!",
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
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="username" />
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

export default UserUpdete;
