import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import Login from "../pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import UserProfile from "../pages/UserProfile";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import NotFound from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* employee Routes  */}
          <Route element={<ProtectedRoute allowedRole="employee" />}>
            <Route path="/dashboard" element={<EmployeeDashboard />} />
          </Route>

          {/* admin routes */}
          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          {/* shared protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user/:id" element={<UserProfile />} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
