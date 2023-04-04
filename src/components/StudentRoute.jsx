import { Navigate } from "react-router-dom";
import { useStudentAuth } from "../hooks/useAuth";

const StudentRoute = ({ children }) => {
  const isStudent = useStudentAuth();
  return isStudent ? children : <Navigate to="/" />;
};

export default StudentRoute;
