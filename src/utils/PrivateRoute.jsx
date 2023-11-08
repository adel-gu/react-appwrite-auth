import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
