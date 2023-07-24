import styled from "styled-components/native";

export const OverlayModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.View`
  width: 90%;
  height: 80%;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: gray;
`;

export const Informations = styled.View`
  width: 80%;
  flex-direction: column;
  gap: 2px;
`;

export const DismissNotification = styled.View`
  border-radius: 100px;
  background-color: red;
  padding: 3px;
`;

export const TitleInformation = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

export const DescriptionInformation = styled(TitleInformation)`
  font-weight: 400;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;
