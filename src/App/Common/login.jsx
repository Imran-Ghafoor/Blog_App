import { Button, Form, Input } from "antd";
import { AiFillGoogleCircle, AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { paths } from "../../Utils/path";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const onFinish = async (values) => {
    // console.log("Success:", values);
    const { data } = await axios.post("/signin", values);
    console.log(data);
    if (data.error) {
      toast.error(data.error);
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{ width: "400px" }}
        className="border rounded-3 shadow p-2 m-3 py-4 px-4"
      >
        <h3 className="m">Login</h3>
        <p className="n">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the
        </p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required!",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item>
            <Button
              icon={<AiOutlineLogin size={15} />}
              className="btnP mt-2"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
            <Button
              icon={<AiFillGoogleCircle size={15} />}
              className="bg-danger mt-4"
              type="primary"
              htmlType="submit"
            >
              Login with google
            </Button>
            <p className="mt-3">
              Do you have an account ?{" "}
              <Link to={paths.Register}>Register!</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
