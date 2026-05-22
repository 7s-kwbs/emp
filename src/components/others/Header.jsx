import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex  w-full px-5 pb-0.5 border-b border-gray-300 ">
      <div className="mt-5">
        <h1 className=" text-3xl text font-medium ">
          Hello, {user.name}👍
        </h1>
        <span className="text-sm font-normal text-gray-500">
          Here's what's happening with your tasks{" "}
        </span>
      </div>
      {/* <div className=" mt-5 ">
      <button
        onClick={handleLogout}
        className="hover:bg-red-500 hover:text-white border/55 bg-white shadow-md px-5 py-2 rounded-sm active:scale-95  "
      >
        Log Out
      </button>
      </div> */}
    </div>
  );
};

export default Header;
