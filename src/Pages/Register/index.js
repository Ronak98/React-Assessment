import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Alert, Popover } from "antd";
import { vsmAuth, vsmNotify } from "../../Config/messages";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions";
import SaveParams from "../../models/SaveParams";

const Register = () => {
  const [error, setError] = useState();
  const [tooltip, setTooltip] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  let history = useHistory();

  const handleRegisterSuccessed = () => {
    vsmNotify.success({
      message: vsmAuth.successRegister,
    });
    history.push("/");
  };

  const handleRegisterFailed = () => {
    setError("Email already exists");
  };

  // make function call to register
  const handleSubmit = (data) => {
    setError(null);
    dispatch(
      register(
        new SaveParams(data, handleRegisterSuccessed, handleRegisterFailed)
      )
    );
  };

  // password criteria tool tip
  const passwordTooltip = (
    <div>
      <div>at least 1 numeric character</div>
      <div>at least 1 special character</div>
      <div>at least 1 uppercase letter</div>
      <div>at least 8 character</div>
    </div>
  );

  // handle password tool tip visiblility
  const handleChangePassword = (e) => {
    form
      .validateFields(["password"])
      .then(() => {
        setTooltip(false);
      })
      .catch(() => {
        setTooltip(true);
      });
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="common__wrapper">
      <Form form={form} className="w400" onFinish={handleSubmit}>
        <Card title="Sign Up">
          {error && (
            <Alert
              style={{ marginBottom: 15 }}
              message={error}
              type="error"
              showIcon
            />
          )}
          <Form.Item name="email" rules={vsmAuth.validation.email} hasFeedback>
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={vsmAuth.validation.username}
            hasFeedback
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Popover
            placement="topRight"
            content={passwordTooltip}
            visible={tooltip}
          >
            <Form.Item
              name="password"
              rules={vsmAuth.validation.password}
              hasFeedback
            >
              <Input.Password
                placeholder="Password"
                onBlur={() => setTooltip(false)}
                onChange={handleChangePassword}
                onFocus={handleChangePassword}
              />
            </Form.Item>
          </Popover>
          <div className="text-center">
            <Button htmlType="submit" block type="primary">
              SIGN UP
            </Button>
          </div>
          <div className="d-flex justify-content-end">
            <Link to="/" type="link" className="p-0 mt-10">
              <b>Login</b>
            </Link>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default Register;
