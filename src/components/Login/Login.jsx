import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ModalRegis from "./Modal";
import { Button,  Form } from "antd";
import { notification } from "antd";
import "../Login/Login.scss";

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
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onSubmit}>
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Correo</label>
            <br/>
            <input
            name="email"
          value={email}
          onChange={onChange}
              type="email"
              className="form-control mt-1"
            rules={[
              {
                required: true,
                message: "Por favor, ingresa tu correo!",
              },
            ]}
            placeholder="Correo"
            />
            
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <br/>
            <input
              name="password"
            value={password}
            onChange={onChange}
              type="password"
              className="form-control mt-1"
            rules={[
              {
                required: true,
                message: "Por favor, ingresa tu contraseña!",
              },
            ]}
            placeholder="Contraseña"
            />
          <br />
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
            <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
            
            <h2 className="sincuenta">
            ¿No tienes cuenta?
            <br />
            ¿A que esperas para ser parte, de la mejor comunidad?
            </h2>
            <br />
            <br />
            <ModalRegis />
          </Form.Item>
          </div>
        </form>
        </div>
  );
};
export default Login;
