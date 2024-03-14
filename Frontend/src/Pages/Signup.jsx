import { useState } from "react";
import Inputbox from "../Components/FormComponets/Inputbox";
import LoginSignupNavbar from "../Components/Comman/LoginSignupNavbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const checkLogin = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-screen flex flex-col relative">
      <LoginSignupNavbar
        text={"Already have an account? "}
        path={"/login"}
        title={"Login"}
      />
      <div className="flex justify-center items-center w-full h-full bg-gray-100">
        <div className="w-8/12 shadow-xl rounded-lg bg-dark">
          <div className="flex gap-4 shadow-md bg-dark">
            <div className="w-6/12 p-12">
                <h1 className="text-2xl text-white">Text Here</h1>
            </div>
            <div className="w-6/12 p-12 bg-light">
              <h2 className="font-bold text-4xl text-dark pb-6">
                Create account
              </h2>
              <form onSubmit={checkLogin}>
                <Inputbox
                  label={"Email"}
                  value={email}
                  isRequired={true}
                  onChange={setEmail}
                  class={""}
                  type={"text"}
                />
                <Inputbox
                  label={"Name"}
                  type={"text"}
                  isRequired={true}
                  value={name}
                  onChange={setName}
                  class={""}
                />
                <Inputbox
                  label={"Password"}
                  isRequired={true}
                  value={password}
                  onChange={setPassword}
                  class={""}
                  type={"password"}
                />
                <button
                  className="bg-primary text-white w-full py-1.5 my-3 font-semibold rounded-sm hover:bg-secondry"
                  type="submit"
                >
                  Signup Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;