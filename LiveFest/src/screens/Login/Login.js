

import { Button, ButtonTitle, Container, ContentAccount, Input, LinkBold, LinkMedium, Logo, TextContentAccount, Title } from '../../screens/Login/Styles';


export const Login = () => {

    return (
      
        <Container>
         
            <Title>Acessar Conta</Title>

            <Logo source={require("../../../src/assets/logo.png")} />

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
                    Não tem uma conta? 
                    <LinkBold>  Cadastre-se</LinkBold>
                </TextContentAccount>
            </ContentAccount>  

        </Container>


    );

}