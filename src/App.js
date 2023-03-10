import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PostDetail from "./components/PostDetail/PostDetail";
import { Footer } from "antd/es/layout/layout";
import Search from "./components/Search/Search";
import Register from "./components/Register/Register";
import CreatePost from "./components/Posts/CreatePost/CreatePost";
 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <>
          <Route path="/loginUser" element={<Login />} />
          <Route path="/createUser" element={<Register />} />
          </>
          <>
          <Route path="/profile" element={<Profile />} />
          </>
          <>
          <Route path="/post/:_id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/createPost" element={<CreatePost />} />
          </>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
