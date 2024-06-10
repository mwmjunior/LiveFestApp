import React, { useState } from 'react';
import { Button, ButtonTitle, Container, ContainerBrokenKey, ContentAccount, Input, Label, LinkBold, StyledInput, Subitle, TextContentAccount, Title } from './Styles';
import BrokenKey from '../../components/Icons/BrokenKey';
import Padlock from '../../components/Icons/Padlock';

// Definição do componente de criação de conta
export const PasswordResetSuccessful = ({ navigation }) => {
   

    return (
        <Container>
            <Title>Senha atualizada!</Title>


            <ContainerBrokenKey>
                     <Padlock size={200} />
            </ContainerBrokenKey>
            
            
            <Subitle>Parabéns! Você redefiniu sua senha com sucesso. </Subitle>
        
    
            <Button>
                <ButtonTitle>Voltar para o início</ButtonTitle>
            </Button>

        </Container>
    );
};
