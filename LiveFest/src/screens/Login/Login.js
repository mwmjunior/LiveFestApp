

import { Button, ButtonTitle, Container, ContentAccount, Input, LinkBold, LinkMedium, Logo, TextContentAccount, Title } from '../../screens/Login/Styles';


export const Login = () => {

    return (
      
        <Container>
         
            <Title>Acessar Conta</Title>

            <Logo source={require("../../../src/assets/VitalHub_Logo.png")} />

            <Input
                placeholder="E-mail"
            />


            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <LinkMedium>Esqueceu sua senha ?</LinkMedium>

            <Button>
                <ButtonTitle>
                    Entrar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <TextContentAccount>
                    Não tem conta? 
                    <LinkBold>  Crie uma conta agora!</LinkBold>
                </TextContentAccount>
            </ContentAccount>  

        </Container>


    );

}