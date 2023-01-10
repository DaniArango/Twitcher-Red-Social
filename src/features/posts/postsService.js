import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllpost = async () => {
  const res = await axios.get(API_URL + "/posts/getAllpost");

  return res.data;
};
const getById = async (_id)=>{
  const res = await axios.get(API_URL +"/posts/getById/" + _id)
  console.log(res.data)
  return res.data
}

const getPostByName = async(title)=>{
  const res = await axios.get(API_URL + "/posts/getPostByName/" + title)
  return res.data
}

const deletePost= async(_id)=>{
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL +"/posts/deletePost/"+ _id,
  {
    headers: {
      authorization: user?.token,
    },
  }
  )
  return res.data
}

const createPost = async (postData) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const res = await axios.post(API_URL + "/posts/createPost/", postData, {
      headers: {
          authorization: user?.token
      }
  })
  return res.data
}

const postsService = {
  getAllpost,
  getById,
  getPostByName,
  deletePost,
  createPost
};

export default postsService;
