import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { Home } from "../components/Home";
import { AuthStack } from "./AuthStack";

export const Routes = () => {
  const { login, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => {
        if (user) {
          login();
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <NavigationContainer>{user ? <Home /> : <AuthStack />}</NavigationContainer>
  );
};
