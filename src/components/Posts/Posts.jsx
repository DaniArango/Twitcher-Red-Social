import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import { getAllpost } from "../../features/posts/postsSlice";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllpost());
    dispatch(reset())
  }, []);

  return (
    <div>
      <h1>Remueve tu Caldero</h1>
      <h3>Aqui podras ver todos los consejos brujiles, que tienen nuestr@ usuari@s... <br />¡Comparte tambien los tuyos!</h3>

      <Post />
    </div>
  );
};

export default Posts;

