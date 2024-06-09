import React, { useState } from 'react';
import { Button, ButtonTitle, Container, ContentAccount, Input, Label, LinkBold, StyledInput, TextContentAccount, Title } from './Styles';

export const CreateAccount = ({ navigation }) => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        cpf: '',
        password: '',
        passwordConfirm: ''
    });

    const [error, setError] = useState({
        name: '',
        email: '',
        cpf: '',
        password: '',
        passwordConfirm: ''
    });

    async function RedirectToSignUp() {
        navigation.replace("Login")
    }

    const [cpfValid, setCpfValid] = useState(true); // Inicialmente, o CPF é válido
    const [cpfInputComplete, setCpfInputComplete] = useState(false); // Inicialmente, o input do CPF não está completo

    const onInputChange = (name, value) => {
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(name, value);
    }

    const validateInput = (name, value) => {
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "name":
                    if (!value) {
                        stateObj[name] = "Por favor, digite seu nome.";
                    } else if (value.length < 3) {
                        stateObj[name] = "O nome deve ter pelo menos 3 caracteres.";
                    }
                    break;

                case "email":
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!value) {
                        stateObj[name] = "Por favor, digite seu email.";
                    } else if (!emailRegex.test(value)) {
                        stateObj[name] = "Email inválido.";
                    }
                    break;

                case "cpf":
                    const isCpfValid = value.length === 14 ? validateCPF(value) : true; // Só valida o CPF se estiver completo
                    setCpfValid(isCpfValid);
                    if (!value) {
                        stateObj[name] = "Por favor, digite seu CPF.";
                    } else if (!isCpfValid) {
                        stateObj[name] = "CPF inválido.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Por favor, digite sua senha.";
                    } else if (value.length < 8) {
                        stateObj[name] = "A senha deve ter pelo menos 8 caracteres.";
                    } else {
                        stateObj["passwordConfirm"] = input.passwordConfirm ? "" : error.passwordConfirm;
                    }
                    break;

                case "passwordConfirm":
                    if (!value) {
                        stateObj[name] = "Por favor, confirme sua senha.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "As senhas estão diferentes, verifique!";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    const handleCreateUser = () => {
        if (input.name && input.email && cpfValid && input.password !== '' && input.password === input.passwordConfirm && !Object.values(error).some(err => err !== "")) {
            alert('Cadastro criado com sucesso');
            navigation.navigate('login');
        } else {
            alert('Ops! Algo deu errado');
        }
    }

    // Função de validação do CPF
    function validateCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cpf.length !== 11) return false;

        let sum = 0;
        let rest;

        for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        
        rest = (sum * 10) % 11;

        if (rest === 10 || rest === 11) rest = 0;

        if (rest !== parseInt(cpf.substring(9, 10))) return false;

        sum = 0;

        for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        
        rest = (sum * 10) % 11;

        if (rest === 10 || rest === 11) rest = 0;

        if (rest !== parseInt(cpf.substring(10, 11))) return false;

        return true;
    }

    // Função para formatar o CPF
    const maskCpf = (text) => {
        text = text.replace(/\D/g, '');
        text = text.substring(0, 11);
        if (text.length <= 3) {
            return text;
        } else if (text.length <= 6) {
            return text.replace(/(\d{3})(\d{0,3})/, '$1.$2');
        } else if (text.length <= 9) {
            return text.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
        } else {
            return text.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
        }
    };

    return (
        <Container>
            <Title>Cadastre-se</Title>

            <Input>
                <Label>Nome completo</Label>
                <StyledInput 
                    placeholder="Digite seu nome completo" 
                    keyboardType="default" 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    value={input.name}
                    onChangeText={(value) => onInputChange('name', value)} 
                />
                {error.name && <Label style={{ color: 'red', fontSize: 14, marginTop: 63, marginLeft: -20 }}>{error.name}</Label>}
            </Input>

            <Input>
                <Label>Email</Label>
                <StyledInput 
                    placeholder="Digite seu email" 
                    keyboardType="email-address" 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    value={input.email}
                    onChangeText={(value) => onInputChange('email', value)} 
                />
                {error.email && <Label style={{ color: 'red', fontSize: 14, marginTop: 63, marginLeft: -20 }}>{error.email}</Label>}
            </Input>

            <Input>
                <Label>CPF</Label>
                <StyledInput 
                    placeholder="Digite seu CPF" 
                    keyboardType="numeric" 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    value={input.cpf} 
                    onChangeText={(value) => {
                        const maskedCpf = maskCpf(value);
                        onInputChange('cpf', maskedCpf);     // Aplica a máscara de CPF
                        const isComplete = maskedCpf.length === 14;
                        setCpfInputComplete(isComplete); // Verifica se o CPF está completo
                        setCpfValid(validateCPF(maskedCpf)); // Valida o CPF e atualiza o estado
                    }} 
                />
                {error.cpf && <Label style={{ color: 'red', fontSize: 14, marginTop: 63, marginLeft: -20 }}>{error.cpf}</Label>}
            </Input>

            <Input>
                <Label>Senha</Label>
                <StyledInput 
                    placeholder="Crie uma senha" 
                    secureTextEntry={true} 
                    autoCompleteType='password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    value={input.password}
                    onChangeText={(value) => onInputChange('password', value)} 
                />
                {error.password && <Label style={{ color: 'red', fontSize: 14, marginTop: 63, marginLeft: -20 }}>{error.password}</Label>}
            </Input>

            <Input>
                <Label>Confirmar senha</Label>
                <StyledInput 
                    placeholder="Confirme sua senha" 
                    secureTextEntry={true} 
                    autoCompleteType='password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    value={input.passwordConfirm}
                    onChangeText={(value) => onInputChange('passwordConfirm', value)} 
                />
                {error.passwordConfirm && <Label style={{ color: 'red', fontSize: 14, marginTop: 63, marginLeft: -20 }}>{error.passwordConfirm}</Label>}
            </Input>

            <Button onPress={handleCreateUser} >
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <ContentAccount>
                <TextContentAccount>
                    Já tem uma conta?
                    <LinkBold onPress={RedirectToSignUp}> Faça o login</LinkBold>
                </TextContentAccount>
            </ContentAccount>
        </Container>
    );
};
