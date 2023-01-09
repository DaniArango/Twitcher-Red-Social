import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserByName } from "../../features/auth/authSlice";
import { getPostByName } from "../../features/posts/postsSlice";
import Post from "../Posts/Post/Post";

const Search = () => {
  const { postName } = useParams();
  const { userName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostByName(postName))
  }, [postName]);

  useEffect(() => {
  dispatch(getUserByName(userName))
  }, [userName]);

  return <div> ¿Buscabas Esto?
    <Post/>
  </div>;
};

export default Search;