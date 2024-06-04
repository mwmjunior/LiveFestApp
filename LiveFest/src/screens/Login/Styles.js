import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fbfbfb;
`;


export const Logo = styled.Image`

    width: 214px;
    height: 120px;

    align-self: center;
    margin: 20px 0px;

`

export const Title = styled.Text`
font-size: 20px;
margin-bottom:5px;
color:#33303E;
font-family: MontserratAlternates_600SemiBold;

`

export const Input =styled.TextInput.attrs({
  placeholderTextColor: '#34899F'
})`

width:90% ;
height:53px;
padding:16px;
margin-top:15px;

border: 2px solid #49B3BA;
border-radius: 5px;
color: #34899F;
font-size:16px ;
font-family: 'MontserratAlternates_600SemiBold';
`

export const LinkMedium = styled.Text`
font-size:14px ;
font-family: 'MontserratAlternates_500Medium';
color: #8C8A97;
margin-top: 10px;
align-self: flex-start;
margin-left: 20px;
`

export const LinkBold = styled(LinkMedium)`

color: #4D659D;
font-size:16px;
`

export const Button = styled.TouchableOpacity`
    width: 90% ;
    height: 44px ;

    background-color: #496bba ;
    border-radius: 5px ;
    border: 1px solid #496bba ;

    margin-top: 15px ;
    padding: 12px 8px 12px 8px ;

    align-items: center ;
    justify-content:center ;
`

export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

export const ContentAccount = styled.View`
width:90% ;
margin-top:  30px;
//border: 1px solid red ;
flex-direction:  row;
align-self: center;
justify-content: center;

`;

export const TextContentAccount = styled.Text`
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #4E4B59;

`;



