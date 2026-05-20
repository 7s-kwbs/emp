import React, { createContext, useContext, useState } from "react";
import { authenticateUser, getAllEmployees, getEmployeeById } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser")) || null,
  );

  const [empData, setEmpData] = useState(
    user?.role === "employee" ? getEmployeeById(user.id) : null,
  );

  const [allEmployees, setAllEmployees] = useState(user?.role === 'admin' ? getAllEmployees(): null)


  const login = (email, password) => {
    const found = authenticateUser(email, password);
    if(!found) return false;

    const sessionUser = {id: found.id, name: found.firstname, email: found.email, role: found.role};
    setUser(sessionUser);
    sessionStorage.setItem("loggedInUser", JSON.stringify(sessionUser));

    if(found.role ==='employee'){
        setEmpData(found)
    }else{
        setAllEmployees(getAllEmployees());
    }
    return found.role
  };

  const logout = ()=>{
    setUser(null);
    setEmpData(null);
    setAllEmployees(null);
    sessionStorage.removeItem("loggedInUser")
  };
  return(
    <AuthContext.Provider value={{user, empData, allEmployees, setAllEmployees, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

export function useAuth(){
    return useContext(AuthContext);
}