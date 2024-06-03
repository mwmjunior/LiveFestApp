import styled from "styled-components/native";

export const ContentAccount = styled.View`
  width: 90%;
  margin-top: 30px;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const TextContentAccount = styled.Text`
  font-size: 16px;
  font-family: 'MontserratAlternates_600SemiBold';
  color: #BCBDBE;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F8FA;
`;

export const Logo = styled.Image`
  width: 214px;
  height: 120px;
  align-self: center;
  margin: 20px 0px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#34899F'
})`
  width: 90%;
  height: 44px;
  margin-bottom: 15px;
  padding: 12px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  background-color: #4090FE;
  border-radius: 5px;
  border: 1px solid #4090FE;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

export const LinkMedium = styled.Text`
  font-size: 14px;
  font-family: 'MontserratAlternates_500Medium';
  color: #BCBDBE;
  margin-top: 10px;
  align-self: flex-start;
  margin-left: 20px;
`;

export const LinkBold = styled(LinkMedium)`
  color: #4090FE;
  font-size: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  color: #33303E;
  font-family: MontserratAlternates_600SemiBold;
`;

