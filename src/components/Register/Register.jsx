import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./Register.scss"


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    age: "",
  });
  const { name, email, password, password2, age } = formData;

  
  const navigate = useNavigate();
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    formData.password = values.password;
    formData.password2 = values.password2;
    console.log(formData)
    dispatch(register(formData));
    navigate("/profile");
    props.setModal(false);
  };

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Bienvenid@ Twitcher@, es hora de remover el caldero",

        description: message,
      });
    }

    if (isError) {
      notification.error({ message: "Error", description: message });
    }
  }, [isSuccess, isError, message]);

  return (
    <div className="register">  
      <div>
        <h1 className="bienvetwit">Bienvenido Twitcher@</h1>
        <h3 className="saludo">¡¡Resgistrate!! Es totalmente gratis</h3>
      </div>
      <>
        <Form 
          autoComplete="true"
          {...formItemLayout}
          form={form}
          onFinish={onFinish}
        >
          <div></div>

          <div className="userForm">
            <Form.Item
              label="Nombre"
              value={name}
              onChange={onChange}
              rules={[
                {
                  required: true,
                  message: "Por favor, ingresa tu Nombre!",
                },
              ]}
            >
              <Input name="name" />
            </Form.Item>

            <Form.Item
              label="Correo"
              value={email}
              onChange={onChange}
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input name="email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Contraseña"
              value={password}
              onChange={onChange}
              rules={[
                {
                  required: true,
                  message: "Por favor, ingresa tu contraseña!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="password2"
              label="Confirma Contraseña"
              value={password2}
              onChange={onChange}
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor, confirma tu contraseña!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Las contraseñas no coinciden!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              type="number"
              label="Edad"
              value={age}
              onChange={onChange}
              rules={[
                {
                  required: true,
                  message: "Por favor, ingresa tu Edad!",
                },
              ]}
            >
              <Input name="age" />
            </Form.Item>
          </div>
          <div className="userRules">
            <br />
            <p>
              Al registrarte con nosotros, aceptas nuestros términos y
              condiciones. <br />
              Ten en cuenta, que hay información delicada dentro de la App y que
              esta bajo tu responsabilidad, el uso de esta. <br />
              No nos hacemos responsables por tus propias decisiones, exigimos
              también, respeto a los demás usuarios, si infringes en alguno de
              los términos, serás expulsado de Twitcher y no podrás volver a
              acceder bajo ningún motivo. <br />
              Ahora, ¡prepara tu caldero!
              <br />
              <strong> Bienvenid@ a la mejor comunidad de bruj@s</strong>
            </p>
          </div>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};

export default Register;
