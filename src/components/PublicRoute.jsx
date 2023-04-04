import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth, useStudentAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const isAdmin = useAdminAuth();
  const isStudent = useStudentAuth();

  if (isAdmin || isStudent) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PublicRoute;
