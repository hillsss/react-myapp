import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";

const App = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (values.username === "admin" && values.password === "123456") {
      message.success("登录成功！");
      navigate("/");
    } else {
      form.resetFields();
      message.error("请输入正确用户名和密码！");
    }
  };
  const onFinishFailed = (values) => {
    console.log("fail: ", values);
  };
  return (
    <Form
      form={form}
      name="normal_login"
      labelCol={{ span: 5 }}
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名!",
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-con" />} placeholder="用户名: admin" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码!",
          },
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码: 123456" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/login">
          忘记密码
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        Or <a href="/login">注 册</a>
      </Form.Item>
    </Form>
  );
};

export default App;
