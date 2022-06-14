import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../pages/App/App";
import { AuthProvider } from "../auth/AuthContext";
import Login from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";
import Register from "../pages/Register/Register";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <Routes>
                <Route path="/" element={<App />} />
              </Routes>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/" element={<Register />} />
              </Routes>
            </PublicRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
