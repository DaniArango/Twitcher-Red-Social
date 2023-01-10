import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../../features/posts/postsSlice";
import "./CreatePost.scss"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const OnChange = (e) => {
    e.preventDefault();
    const postData = {
      title: title,
      body: body,
    };
    dispatch(createPost(postData));
  };

  return (
    <>
      <div  className="publicontainer">
        <div>
          <p className="publica">¿Algun consejo brujil?</p>
        </div>
      
      <div>
        <form onSubmit={OnChange}>
          <div>
            <label>Titulo</label>
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Consejo</label>
            <div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Button type="primary" htmlType="submit" style={{}}>
              Publicar
            </Button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default CreatePost;
