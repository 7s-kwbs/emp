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
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold mt-0 pt-0">{user.name}👍</span>
      </h1>
      <button onClick={handleLogout} className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium"> Log Out</button>
    </div>
  );
};

export default Header;
