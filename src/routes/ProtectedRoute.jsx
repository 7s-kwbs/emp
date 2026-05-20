import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../context/AuthProvider'

export const ProtectedRoute = ({allowedRole}) => {
  const {user} = useAuth();
  if(!user){
    return <Navigate to='/login' replace />;
  }
  if(allowedRole && user.role !== allowedRole){
    return <Navigate to="/login" />;
  }
  return <Outlet />
}
