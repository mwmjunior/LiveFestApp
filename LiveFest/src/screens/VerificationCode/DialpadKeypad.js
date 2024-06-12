import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";    // Importa Feather, um pacote de ícones para React Native.
import styled from "styled-components/native";   // Importa styled-components para estilizar componentes no React Native.


const DialpadKeypad = ({
  dialPadContent,              // Conteúdo do teclado, um array de itens (números e um botão de deletar).
  pinLength,                   // Tamanho máximo do código PIN que pode ser digitado.
  code,                        // Código atual inserido pelo usuário.
  setCode,                     // Função para atualizar o código.
  navigation,                  // Objeto de navegação para trocar de telas.
  dialPadSize,                 // Tamanho dos botões do teclado.
  dialPadTextSize,             // Tamanho do texto nos botões do teclado.
}) => {
   // Retorna um componente FlatList que exibe os botões do teclado em uma grade.
  return (
    <FlatList                                        
      data={dialPadContent}                          // Define os dados a serem exibidos na FlatList.
      numColumns={3}                                 // Define que a FlatList terá 3 colunas.
      keyExtractor={(_, index) => index.toString()}  // Gera uma chave única para cada item com base no índice.
      renderItem={({ item }) => {                    // Função que define como cada item será renderizado.
        const isDelete = item === "X";               // Verifica se o item atual é o botão de deletar (representado por "X").
        const isEmpty = item === "";                 // Verifica se o item atual é um espaço vazio.


         // Retorna um componente TouchableOpacity, que é um botão clicável.
        return (
          <TouchableOpacity
            disabled={isEmpty} // Desativa o botão se o item for um espaço vazio.
            onPress={() => {   // Define o que acontece quando o botão é pressionado.
              if (isDelete) {  // Se o botão for o de deletar...
                setCode((prev) => prev.slice(0, -1));  // Remove o último caractere do código.
              } else {         // Se o botão não for o de deletar...
                if (code.length === pinLength - 1) {    // Verifica se o código está completo.
                  navigation.navigate("PasswordResetSuccessful");          // Navega para a tela "PasswordResetSuccessful".
                }
                setCode((prev) => [...prev, item]);      // Adiciona o item ao código.
              }
            }}
          >
            <DialPadContainer                  //background-color: Agora, é transparente tanto para os botões de apagar (isDelete) 
              size={dialPadSize}               //quanto para os espaços vazios (isEmpty). Isso garante que não haverá um fundo visível 
              isDelete={isDelete}              //para esses elementos.
              isEmpty={isEmpty} 
            >
              {isDelete ? (
                <DeleteIcon size={dialPadTextSize} />
              ) : (
                !isEmpty && (
                  <DialPadText size={dialPadTextSize}>{item}</DialPadText>
                )
              )}
            </DialPadContainer>
          </TouchableOpacity>
        );
      }}
    />
  );
};


export default DialpadKeypad;

// Styled-components para estilização
const DialPadContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: ${(props) => (props.isEmpty || props.isDelete ? "transparent" : "#EBECEE")};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => (props.isDelete || props.isEmpty ? "0px" : "50px")};
`;

const DialPadText = styled.Text`
  color: #3f1d38;
  font-size: ${(props) => props.size}px;
   font-family: MontserratAlternates_600SemiBold;

`;

const DeleteIcon = styled(Feather).attrs({
  name: "delete",
  color: "#D75353 ",
})`
  font-size: ${(props) => props.size}px;
`;