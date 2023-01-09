import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);
  if (!post) {
    return <h1>cargando...</h1>;
  }

  console.log(_id);

  return (
    <div>
      PostDetail
      <p>Usuario: {post.userId?.name}</p>
      <p>Titulo: {post.title}</p>
      <p>Contenido: {post.body}</p>
    </div>
  );
};
export default PostDetail;
