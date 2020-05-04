import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "./Routes";

export const Provider = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
