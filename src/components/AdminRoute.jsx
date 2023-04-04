import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const isAdmin = useAdminAuth();
  return isAdmin ? children : <Navigate to="/admin" />;
};

export default AdminRoute;
