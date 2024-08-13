import React, { useState } from "react";
import {
  useDeleteUsersMutation,
  useGetUsersQuery,
} from "../../../context/api/userApi";
import { Card, Button, Flex } from "antd";
import UserUpdete from "../../../components/userUpdete/UserUpdete";
const { Meta } = Card;

const ManageUser = () => {
  const { data } = useGetUsersQuery();
  console.log(data?.payload);
  const [modalOpen, setModalOpen] = useState(null);
  const [deleteUser] = useDeleteUsersMutation();

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm("User ochirilsinmi");

    if (confirmDelete) {
      deleteUser(userId);
    }
  };

  const handleCancel = () => {
    setModalOpen(null);
  };

  return (
    <div className="flex flex-wrap gap-3 p-6">
      {data?.payload?.map((el) => (
        <Card
          key={el?._id}
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              className="h-40 object-contain bg-slate-50"
              alt="example"
              src={el?.url}
            />
          }
        >
          <Meta
            title={`${el?.fname} ${el?.lname}`}
            description={`${el?.username}`}
            desc={el?.age}
          />
          <Flex className="mt-2" gap="small" wrap>
            <Button onClick={() => setModalOpen(el)} type="primary">
              Edit
            </Button>
            <Button onClick={() => handleDelete(el?._id)} type="primary">
              Delete
            </Button>
          </Flex>
          {modalOpen ? (
            <UserUpdete modalOpen={modalOpen} handleCancel={handleCancel} />
          ) : (
            <></>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ManageUser;
