import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllpost = async () => {
  const res = await axios.get(API_URL + "/posts/getAllpost");

  return res.data;
};
const getById = async (_id)=>{
  const res = await axios.get(API_URL +"/posts/getById/" + _id)
  return res.data
}

const getPostByName = async(title)=>{
  const res = await axios.get(API_URL + "/posts/getPostByName/" + title)
  return res.data
}

const postsService = {
  getAllpost,
  getById,
  getPostByName
};

export default postsService;
