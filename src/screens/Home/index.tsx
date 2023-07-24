import React, { useEffect, useState } from "react";

import axios from "axios";

import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, TouchableOpacity } from "react-native";
import { Modal } from "../../components/Modal";
import { Container, Header, Title } from "./styles";

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    handleGetNotifications();
  }, []);

  async function handleGetNotifications() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=1`
    );
    setNotifications(data);
  }

  function handleCloseOrOpenModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <StatusBar style="dark" />
      <Container>
        <Header>
          <Image
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
            source={require("../../assets/logo.png")}
          />
          <TouchableOpacity onPress={handleCloseOrOpenModal}>
            <MaterialIcons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </Header>
        <Title>Home Logado</Title>
      </Container>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={handleCloseOrOpenModal}
        notifications={notifications}
      />
    </>
  );
}
