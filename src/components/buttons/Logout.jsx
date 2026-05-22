import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <button
      onClick={handleLogout}
      className="hover:bg-red-500 hover:text-white border/55 bg-white px-5 py-2 rounded-sm active:scale-95  "
    >
      Log Out
    </button>
  );
};

export default Logout;
