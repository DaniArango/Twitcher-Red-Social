import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ModalRegis from "./Modal";
import { Button, Checkbox, Divider, Form} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { notification } from "antd";
import "../Login/Login.scss"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = formData;
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }

    if (isSuccess) {
      notification.success({ message: "Success", description: message });

      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }

    dispatch(reset());
  }, [isError, isSuccess, message]);

  return (
<div className="Login">
     <Divider orientation="center">
        <h1>LOGIN</h1>
      </Divider>

    <form onSubmit={onSubmit}>
      <input
         name="email"
         value={email}
         onChange={onChange}
         rules={[
           {
             required: true,
             message: "Por favor, ingresa tu correo!",
           },
         ]}
         prefix={<UserOutlined className="site-form-item-icon" />}
         placeholder="Email"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        rules={[
          {
            required: true,
            message: "Por favor, ingresa tu contraseña!",
          },
        ]}  
        prefix={<LockOutlined className="site-form-item-icon" />}
           type="password"
           placeholder="Password"
      />
<br /><br />
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