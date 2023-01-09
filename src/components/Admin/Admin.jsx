import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllpost } from "../../features/posts/postsSlice";
import PostAdmin from "./PostAdmin/PostAdmin";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllpost());
  }, []);

  return (
    <div>
      Admin
      <PostAdmin />
    </div>
  );
};

export default Admin;
