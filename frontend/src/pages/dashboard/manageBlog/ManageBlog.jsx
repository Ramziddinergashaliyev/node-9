import React, { cloneElement, useState } from "react";
import {
  useDeleteBlogsMutation,
  useGetBlogsQuery,
} from "../../../context/api/blogsApi";
import { Card } from "antd";
import UpdeteMdal from "../../../components/updeteModal/UpdeteMdal";

const ManageBlog = () => {
  const { data } = useGetBlogsQuery();
  const [deleteBlogs] = useDeleteBlogsMutation();
  const [modalOpen, setModalOpen] = useState(null);

  const handleCancel = () => {
    setModalOpen(null);
  };

  // const handleSubmit = (values) => {
  //   SignIn(values);
  // };

  return (
    <div className="flex gap-4 p-8 flex-wrap">
      {data?.payload?.map((el) => (
        <Card
          key={el?._id}
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
              onClick={() => setModalOpen(el)}
              className="bg-black py-1 px-5 rounded-lg text-slate-200"
            >
              edit
            </button>
            {modalOpen ? (
              <UpdeteMdal modalOpen={modalOpen} handleCancel={handleCancel} />
            ) : (
              <></>
            )}
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
