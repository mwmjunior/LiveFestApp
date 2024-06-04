import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #F7F8FA;
`;

export const Logo = styled.Image`
  width: 214px;
  height: 120px;
  align-self: center;
  margin: 50px 0px; /* Aumentando a margem superior para descer a logo para baixo */

  
`;

export const Title = styled.Text`
  padding-top: 42px;
  font-size: 24px;
  margin-bottom: 5px;
  color: #33303E;
  font-family: MontserratAlternates_600SemiBold;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#333333'
})`
  width: 90%;
  height: 80px;
  padding: 16px;
  margin-top: 22px;
  border: 1px solid rgba(0, 0, 0, 0.0935);
  font-size: 16px;
  font-family: 'MontserratAlternates_600SemiBold';
`;

export const LinkMedium = styled.Text`
  font-size: 14px;
  font-family: 'MontserratAlternates_500Medium';
  color: #BCBDBE;
  margin-top: 12px;
  align-self: flex-start;
  margin-left: 20px;
`;

export const LinkBold = styled(LinkMedium)`
  color: #4090FE;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 80px;
  background-color: #4090FE;
  border-radius: 5px;
  border: 1px solid #4090FE;
  margin-top: 40px;
  padding: 12px 8px 12px 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

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
