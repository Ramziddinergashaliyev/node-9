import React from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../context/api/productApi";
import { Card, Button, Flex } from "antd";
const { Meta } = Card;

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  console.log(data?.payload);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Product O'chirilsinmi");
    if (isConfirmed) {
      deleteProduct(id);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {data?.payload?.map((el) => (
        <Card
          key={el._id}
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              className="h-48 object-cover"
              alt="example"
              src={el?.urls[0]}
            />
          }
        >
          <Meta title={el?.title} description={el?.desc} />
          <Button
            onClick={() => handleDelete(el?._id)}
            className="mt-4"
            type="primary"
          >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ManageProduct;
