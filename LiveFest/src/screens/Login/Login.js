import { Button, ButtonTitle, Container, ContentAccount, Input, LinkBold, LinkMedium, Logo, TextContentAccount, Title } from "./Styles";



export const Login = () => {

    return (

        <Container>

        <Logo source={require("../../../assets/TicketLiveFest.png")} />

            <Title>Acessar Conta</Title>

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