import React from "react";
import { useGetProfileQuery } from "../../context/api/userApi";

const Header = () => {
  const { data, error } = useGetProfileQuery();
  console.log(data);
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
