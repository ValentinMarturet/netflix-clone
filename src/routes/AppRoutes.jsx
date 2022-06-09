import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
