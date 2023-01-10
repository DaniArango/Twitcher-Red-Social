import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deletePost } from "../../../features/posts/postsSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";

import "./Post.scss"

const Post = () => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (isLoading) {
        return <h1>Cargando...</h1>;
      }
      return (
        <div className='publicacionescontenedor'>
          {posts.map((post) => (
            <div key={post._id}>
            <Link to={"/post/" + post._id}>
              <div className='publicacion'>{post.title}</div>
            </Link>
            <p className='publieliminada'>Eliminar Publicación</p>
            <RiDeleteBin2Fill onClick={() => dispatch(deletePost(post._id))} />
            </div>
            
            ))}
        </div>
      );
      
    };
    
    export default Post;