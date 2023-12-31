import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../contexts/Auth";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export function Router() {
  const { authData } = useAuth();

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
