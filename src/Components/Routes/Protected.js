import React from 'react';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({children, isLogged }) => {
  return isLogged ? children : <Navigate to="/login"/> ;
};

export default ProtectedRoute;
