import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const{user} = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout =()=>{
    logout();
    navigate("/")
  }
 
  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-3xl text font-medium mt-10">
        Hello, {user.name}👍
        
        <p className="text-sm font-normal text-gray-500">Here's what's happening with your tasks </p>
      </h1>
      <button onClick={handleLogout} className="hover:bg-red-500 hover:text-white border/55 bg-white shadow-md px-5 py-2 rounded-sm active:scale-95 "> Log Out</button>
    </div>
  );
};

export default Header;
