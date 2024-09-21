import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = false;

  return token ? children : <Navigate to="/login" />;
};
 
export default PrivateRoute;
