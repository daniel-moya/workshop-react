import React from 'react';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const isLogged = true
  return isLogged ? children : <Navigate to="/login"/> ;
};

export default ProtectedRoute;
