// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedin } from '../Configuration/ApiConfig';

const ProtectedRoute = ({ children }) => {
  return isLoggedin() ? children : <Navigate to="/"  />;
};

export default ProtectedRoute;
