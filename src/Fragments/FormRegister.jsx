import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputForm from "../components/Input";

const FormRegister = () => {
  return (
    <form>
      <div className="flex bg-[#0d1117] w-screen h-screen justify-center items-center ">
        <div>
          <p className="text-white mb-2 text-3xl font-bold">Sign Up</p>
          <p className="text-white font-medium mb-5">
            Welcome, Please enter your details
          </p>
          <div className="flex flex-col bg-[#161b22] w-[288px] h-[375px] justify-center items-center rounded-[5px] border-[1px] border-gray-800">
            <InputForm label="Username" type="text" name="username" />
            <InputForm label="Email" type="email" name="email" />
            <InputForm label="Password" type="password" name="password" />
            <InputForm
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <Button classname="w-[250px] h-[35px] bg-[#238636] rounded-md text-white items-center justify-center text-[14px]">
              Sign Up
            </Button>
          </div>
          <div>
            <p className="text-sm mt-5 text-center text-white">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-500">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormRegister;
