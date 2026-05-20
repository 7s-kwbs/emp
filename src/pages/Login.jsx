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
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-lg">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center gap-2"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-2 border-emerald-600 rounded-full py-4 px-6 text-xl placeholder:text-gray-400 text-white"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none border-2 border-emerald-600 rounded-full py-4 px-6 text-xl placeholder:text-gray-400 text-white"
            type="password"
            placeholder="Enter your password"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}  {/* ← add this */}

          <button className="mt-4 text-white bg-emerald-600 rounded-full py-2 px-6 text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;