import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const role = login(email, password);

    if (role === "admin") navigate("/admin/dashboard");
    else if (role === "employee") navigate("/dashboard");
    else setError("Invalid email or password");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1760563368807-ce05c0d30726?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center overflow-hidden relative">
      <div className="absolute inset-0 bg-white/20 blur-3xl"></div>
      <div className=" border border-white/30 z-10  px-50 py-20 bg-black/30 inset-shadow-sm shadow-2xl rounded-xl ">
        <div className="border border-white/30 z-50 py-10 px-10 rounded-lg bg-white/30 backdrop-blur-sm shadow-2xl ">
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col  justify-center gap-2"
          >
            <img src="public/icon.png" alt=""
            className="h-14 w-14 rounded-lg flex self-center"
             />
             <h2 className="text-white text-3xl font-semibold">Login</h2>
             <label className="flex items text-white text-lg  font-normal ">Name</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-white rounded py-2 px-4 text-xl font-normal"
              type="email"
              placeholder="Enter your Email"
            />
             <label className="flex items text-white text-lg font-normal ">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none bg-white rounded py-2 px-4 text-xl font-normal"
              type="password"
              placeholder="Enter your password"
            />
            <p className="text-red-500 text-sm h-4">
            {error && <span >{error}</span>}{" "}
            </p>
            <label className="flex items text-white text-lg hover:text-red-400 font-normal">Forget Password</label>
            <button className="mt-4 text-white bg-black/50 rounded-lg py-2 px-6 text-xl active:scale-95">
              Login
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
