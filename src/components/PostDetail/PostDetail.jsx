import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import "./PostDetail.scss"

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
    <div className="detail-container">
    <div className="postdetail">
      <p>Twitcher@: {post.userId?.name}</p>
      <br />
      <p>Titulo: <br />{post.title}</p>
      <br />
      <p>Consejo:<br /> {post.body}</p>
    </div>
    </div>
  );
};
export default PostDetail;
