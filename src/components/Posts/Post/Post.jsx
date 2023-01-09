import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Post = () => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);
    if (isLoading) {
        return <h1>Cargando...</h1>;
      }

    return (
        <div>
          {posts.map((post) => (
            <div key={post._id}>
            <Link to={"/post/" + post._id}>
              <p>{post.title}</p>
              
            </Link>
            </div>
          ))}
        </div>
      );
    };
    
    export default Post;