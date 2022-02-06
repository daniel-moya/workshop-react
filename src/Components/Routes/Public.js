import React from 'react';
import { Navigate} from 'react-router-dom';

const PublicRoute = ({children}) => {
  const isLogged = true
  return isLogged ? <Navigate to="/"/> : children ;
};

export default PublicRoute;
