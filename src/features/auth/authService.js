import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (userData) => {
  console.log(userData)
  const res = await axios.post(API_URL + "/users/createUser", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/users/loginUser", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  console.log(res.data)
  return res.data;
};

const logout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/users/logoutUser", {
    headers: { authorization: user.token },
  });
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};

const getUserByName = async(name)=>{
  const res = await axios.get(API_URL + "/posts/getPostByName/" + name)
  return res.data
}

const authService = {
  register,
  login,
  logout,
  getUserByName
};

export default authService;
