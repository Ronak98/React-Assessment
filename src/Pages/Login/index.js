import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Alert, Popover } from "antd";
import { vsmAuth, vsmNotify } from "../../Config/messages";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import LoadParams from "../../models/LoadParams";

const Login = () => {
  const [error, setError] = useState();
  const [tooltip, setTooltip] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  let history = useHistory();

  const handleLoginSuccessed = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    vsmNotify.success({
      message: vsmAuth.success,
    });
    history.push("/dashboard");
  };

  const handleLoginFailed = () => {
    setError("Invalid email or password");
  };

  // make function call to login
  const handleSubmit = (data) => {
    setError(null);
    dispatch(
      login(new LoadParams(data, handleLoginSuccessed, handleLoginFailed))
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
        <Card title="Login">
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
              LOGIN
            </Button>
          </div>
          <div className="d-flex justify-content-end">
            <Link to="/register" type="link" className="p-0 mt-10">
              <b>Sign Up</b>
            </Link>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
