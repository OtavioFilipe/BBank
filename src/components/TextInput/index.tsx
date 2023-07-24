import React from "react";

import { TextInputProps } from "react-native";
import { Container } from "./styles";

export function TextInput(props: TextInputProps) {
  return <Container placeholderTextColor="#727272" {...props} />;
}
