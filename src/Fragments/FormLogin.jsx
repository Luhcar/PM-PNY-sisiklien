import { useEffect, useRef, useState } from "react";
import InputForm from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { login } from "../services/authService";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/home";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  const focusInput = () => {
    usernameRef.current.focus();
  };
 
  return (
    <div className="flex bg-[#0d1117] w-screen h-screen justify-center items-center ">
      <div>
        <p className="text-white mb-2 text-3xl font-bold">Sign In</p>
        <p className="text-white font-medium mb-5">
          Welcome, Please enter your details
        </p>
        <div className="flex flex-col bg-[#161b22] w-[288px] h-[230px] justify-center items-center rounded-[5px] border-[1px] border-gray-800">
          <form onSubmit={handleLogin}>
            <InputForm
              label="Username"
              type="text"
              name="username"
              ref={usernameRef}
            />
            <InputForm label="Password" type="password" name="password" />
            <Button
              classname="w-[250px] h-[35px] bg-[#238636] rounded-md text-white items-center justify-center text-[14px]"
              type="submit"
            >
              Sign In
            </Button>
            {loginFailed && (
              <p className="text-red-500 text-center mt-5">{loginFailed}</p>
            )}
          </form>
        </div>
        <div>
          <p className="text-sm mt-5 text-center text-white">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
