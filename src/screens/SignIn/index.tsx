import React, { useState } from "react";
import { Image } from "react-native";

import { Container } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useAuth } from "../../contexts/Auth";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <Container style={{ justifyContent: "center" }}>
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={require("../../assets/logo.png")}
      />
      <TextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <TextInput
        secureTextEntry
        placeholder="senha"
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={() => signIn(email, password)} title="Entrar no App" />
    </Container>
  );
}
