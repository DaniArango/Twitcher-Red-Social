import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ModalRegis from "./Modal";
import { Button, Checkbox, Divider, Form, Input  } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = formData;
  
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  dispatch(login(formData))
  };


  useEffect(() => {
    const foundToken = JSON.parse(localStorage.getItem("token"));
    if (foundToken) {
      navigate("/profile");
    }
  }, [navigate]);

  
  return (

    <div className="Login">
    <Divider orientation="center">
       <h1>LOGIN</h1>
     </Divider>

    <form onSubmit={onSubmit}>
    <Form.Item
         name="email"
         value={email}
         onChange={onChange}
         rules={[
           {
             required: true,
             message: "Por favor, ingresa tu correo!",
           },
         ]}
       >
         <Input
           prefix={<UserOutlined className="site-form-item-icon" />}
           placeholder="Email"
         />
       </Form.Item>
       <Form.Item
         name="password"
         value={password}
         onChange={onChange}
         rules={[
           {
             required: true,
             message: "Por favor, ingresa tu contraseña!",
           },
         ]}
       >
         <Input
           prefix={<LockOutlined className="site-form-item-icon" />}
           type="password"
           placeholder="Password"
         />
       </Form.Item>
       <Form.Item>
         <Form.Item name="remember" valuePropName="checked" noStyle>
           <Checkbox className="check">Remember me</Checkbox>
         </Form.Item>
       </Form.Item>

       <Form.Item>
         <Button type="primary" htmlType="submit">
           Login
         </Button>
         <ModalRegis />
       </Form.Item>
     
    </form>
    </div>
  );
};
export default Login;