import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import EmailIcon from '../../components/Icons/Email';
import PasswordIcon from '../../components/Icons/Password';
import ShowIcon from '../../components/Icons/Show';
import HideIcon from '../../components/Icons/Hide';
import { Button, ButtonTitle, Container, ContentAccount, IconWrapper, Input, LinkBold, LinkMedium, Logo, StyledInput, TextContentAccount, Title, PasswordInputContainer, ShowHideButton } from '../../screens/Login/Styles';

export const Login = () => {
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <Container>
            <Title>Acessar Conta</Title>

            <Logo source={require("../../../src/assets/logo.png")} />

            <Input>
                <IconWrapper>
                    <EmailIcon color={"#4090FE"} size={17} />
                </IconWrapper>
                <StyledInput placeholder="E-mail" />
            </Input>

            <Input>
                <IconWrapper>
                    <PasswordIcon color={"#4090FE"} size={20} />
                </IconWrapper>
                <PasswordInputContainer>
                    <StyledInput 
                        placeholder="Senha" 
                        secureTextEntry={isSecureEntry}
                    />
                    <TouchableOpacity
                        onPress={() => setIsSecureEntry((prev) => !prev)}
                    >
                        {isSecureEntry ? <HideIcon color={"#3E3E40"} size={23} /> : <ShowIcon color={"#3E3E40"} size={23} />}
                    </TouchableOpacity>
                </PasswordInputContainer>
            </Input>
            
            <LinkMedium>Esqueceu sua senha?</LinkMedium>

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
};
