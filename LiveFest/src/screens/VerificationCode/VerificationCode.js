import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import DialpadPin from '../../screens/VerificationCode/DialpadPin';
import DialpadKeypad from '../../screens/VerificationCode/DialpadKeypad';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'X'];

const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;

const pinLength = 4;
const pinContainerSize = width / 2;
const pinSize = pinContainerSize / pinLength;

const VerificationCode = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState([]);

  return (
    <Container>
      <TextContainer>
        <PinText>Recuperação de acesso</PinText>
        <PinSubText>Insira no campo abaixo o código de verificação de 4 dígitos enviado para o email:</PinSubText>
        <TextEmail> joao******@gmail.com</TextEmail> 

        <DialpadPin
          pinLength={pinLength}
          pinSize={pinSize}
          code={code}
          dialPadContent={dialPadContent}
        />

        <DialpadKeypad
          dialPadContent={dialPadContent}
          pinLength={pinLength}
          setCode={setCode}
          code={code}
          dialPadSize={dialPadSize}
          dialPadTextSize={dialPadTextSize}
          navigation={navigation}
        />
      </TextContainer>
    </Container>
  );
};

export default VerificationCode;

// Styled components para estilização

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f7f8fa;
`;

const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  position: relative;
`;

const PinText = styled.Text`
  padding-top: 2px;
  font-size: 24px;
  margin-bottom: 5px;
  color: #33303E;
  font-family: MontserratAlternates_600SemiBold;
`;

const PinSubText = styled.Text`
  font-size: 18px;
  color: #CDCEC0;
  text-align: justify;
  font-family: MontserratAlternates_600SemiBold;
  padding: 12px 4px;
  width: 90%
`;

export const TextEmail= styled.Text`
  color: #333333;
  font-size: 18px;
  font-family: MontserratAlternates_600SemiBold;
  margin-bottom: 70px;
  width: 90%;

`;

const DialPadContainer = styled.View`
  width: ${dialPadSize}px;
  height: ${dialPadSize}px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 50px;
  border-color: transparent;

`;

const DialPadText = styled.Text`
  color: #3f1d38;
  font-size: ${dialPadTextSize}px;
  
`;
