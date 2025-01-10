import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = localStorage.getItem("token") && localStorage.getItem("token");

  return token && token?.length ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Auth;
