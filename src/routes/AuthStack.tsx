import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
