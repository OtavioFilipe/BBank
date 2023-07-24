import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { FlatList, Modal as ModalRn } from "react-native";
import {
  CloseButton,
  Content,
  DescriptionInformation,
  DismissNotification,
  Informations,
  ModalContainer,
  OverlayModal,
  TitleInformation,
} from "./styles";

export function Modal({ modalVisible, handle, notifications }: any) {
  return (
    <ModalRn
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handle}
    >
      <OverlayModal>
        <ModalContainer>
          <CloseButton onPress={() => {}}>
            <AntDesign name="close" size={24} color="black" />
          </CloseButton>
          <FlatList
            data={notifications}
            renderItem={({ item }) => (
              <Content>
                <Informations>
                  <TitleInformation>{item.title}</TitleInformation>
                  <DescriptionInformation>{item.body}</DescriptionInformation>
                </Informations>
                <DismissNotification>
                  <AntDesign name="close" size={18} color="white" />
                </DismissNotification>
              </Content>
            )}
          />
        </ModalContainer>
      </OverlayModal>
    </ModalRn>
  );
}
