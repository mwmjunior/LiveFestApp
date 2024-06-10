import React, { useState } from 'react';
import { Button, ButtonTitle, Container, ContainerBrokenKey, ContentAccount, Input, Label, LinkBold, StyledInput, TextContentAccount, Title } from './Styles';
import BrokenKey from '../../components/Icons/BrokenKey';

// Definição do componente de criação de conta
export const PasswordRecover = ({ navigation }) => {
   

    return (
        <Container>
            <Title>Esqueceu a senha?</Title>


            <ContainerBrokenKey>
                     <BrokenKey size={250} />
            </ContainerBrokenKey>
            
        
            <Input>
                <Label>Email</Label>
                <StyledInput 
                    placeholder="Digite seu email" 
                    keyboardType="email-address" 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                  
                />
            </Input>

            <Button>
                <ButtonTitle>Recuperar minha</ButtonTitle>
            </Button>

        </Container>
    );
};
