import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHadler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-lg">
        <form
          onSubmit={(e) => {
            submitHadler(e);
          }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className="outline-none border-2 border-emerald-600 rounded-full py-4 px-6 text-xl placeholder:text-gray-400 text-white"
            type="email"
            placeholder="Enter your Email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="outline-none border-2 border-emerald-600 rounded-full py-4 px-6 text-xl placeholder:text-gray-400 text-white"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" mt-4 text-white bg-emerald-600 rounded-full py-2 px-6 text-xl ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
