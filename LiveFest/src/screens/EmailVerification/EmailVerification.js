import React, { useState } from 'react';
import { Button, ButtonTitle, Container, ContainerBrokenKey, ContainerSmartphone, ContentAccount, Input, Label, LinkBold, StyledInput, Subitle, TextContentAccount, Title } from './Styles';

import Smartphone from '../../components/Icons/Smartphone';

// Definição do componente de criação de conta
export const EmailVerification= ({ navigation }) => {
   

    return (
        <Container>
            
            <ContainerSmartphone>
                     <Smartphone size={250} />
            </ContainerSmartphone>

            <Subitle>Enviamos uma verificação link para seu e-mail </Subitle>
        
            <Button>
                <ButtonTitle>Validar código </ButtonTitle>
            </Button>

        </Container>
    );
};
