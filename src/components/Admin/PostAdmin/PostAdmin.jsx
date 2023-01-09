import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost} from "../../../features/posts/postsSlice";

const PostAdmin = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const deletePost = async (_id) => {
   dispatch(deletePost(_id));
  };

  const post = posts.map((post) => {
    return (
      <div key={post.id}>
        <span>{post.title} </span>
        <button onClick={()=>deletePost(post.id)}>Delete</button>
      </div>
    );
  });
  return <div>{post}</div>;
};

export default PostAdmin;