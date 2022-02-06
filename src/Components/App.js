import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/Protected";
import Specialitities from "./Pages/Specialities";
import Speciality from "./Pages/Speciality";
import Course from "./Pages/Course";
import Courses from "./Pages/Courses";
import Teachers from "./Pages/Teachers";
import Fragment from "./Pages/Fragment";
import PublicRoute from "./Routes/Public";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NotFound from "./Pages/404";
import Header from "./Organims/Header";
import './App.css'; 
const App = () => {
  const isLogged = false;
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/especialidades"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Specialitities />
            </ProtectedRoute>
          }
        />
        <Route
          path="/especialidades/:id"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Speciality />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cursos"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cursos/:id"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Course />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profesores"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Teachers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clase/:id"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Fragment />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute isLogged={isLogged}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/regiter"
          element={
            <PublicRoute isLogged={isLogged}>
              <Register />
            </PublicRoute>
          }
        />

        {/* Default Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
