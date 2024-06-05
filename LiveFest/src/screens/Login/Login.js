import React from 'react';
import EmailIcon from '../../components/Icons/Email';
import { Button, ButtonTitle, Container, ContentAccount, IconWrapper, Input, InputContainer, LinkBold, LinkMedium, Logo, StyledInput, TextContentAccount, Title } from '../../screens/Login/Styles';
import PasswordIcon from '../../components/Icons/Password';




export const Login = () => {
    return (
        <Container>
            <Title>Acessar Conta</Title>

            <Logo source={require("../../../src/assets/logo.png")} />

            <InputContainer>
                <IconWrapper>
                    <EmailIcon color={"#4090FE"} size={17} />
                </IconWrapper>
                <StyledInput placeholder="E-mail" />
            </InputContainer>

            <InputContainer>
                <IconWrapper>
                    <PasswordIcon color={"#4090FE"} size={20} />
                </IconWrapper>
                <StyledInput placeholder="Senha" secureTextEntry  />
            </InputContainer>
            
            <LinkMedium>Esqueceu sua senha ?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ContentAccount>
                <TextContentAccount>
                    Não tem uma conta?
                    <LinkBold> Cadastre-se</LinkBold>
                </TextContentAccount>
            </ContentAccount>
        </Container>
    );
}
