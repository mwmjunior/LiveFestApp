import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

// Define o componente DialpadKeypad que recebe várias propriedades
const DialpadKeypad = ({
  dialPadContent,
  pinLength,
  code,
  setCode,
  navigation,
  dialPadSize,
  dialPadTextSize,
}) => {
  // Retorna um componente FlatList que renderiza o teclado
  return (
    <FlatList
      data={dialPadContent} // Define os dados a serem renderizados na FlatList  
      numColumns={3} // Define o número de colunas na FlatList
      keyExtractor={(_, index) => index.toString()} // Define a função para extrair a chave única de cada item
      renderItem={({ item }) => {      // Define a função para renderizar cada item
        const isDelete = item === "X";  // Verifica se o item é o botão de deletar
        const isEmpty = item === "";   // Verifica se o item está vazio

        return (
          <TouchableOpacity
            disabled={isEmpty} // torna o espaço vazio no conteúdo do teclado não clicável
            onPress={() => {  // Define a função de clique do botão
              if (isDelete) { // Se for o botão de deletar
                setCode((prev) => prev.slice(0, -1)); // Remove o último caractere do código
              } else { // Se não for o botão de deletar
                if (code.length === pinLength - 1) { // Se o código atingir o comprimento máximo
                  navigation.navigate("Home"); // Navega para a tela inicial
                }
                setCode((prev) => [...prev, item]); // Adiciona o número ao código
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
  justify-content: center; // Alinha o conteúdo verticalmente ao centro
  align-items: center; // Alinha o conteúdo horizontalmente ao centro
  margin: 10px; // Define a margem externa
  background-color: ${(props) => (props.isEmpty || props.isDelete ? "transparent" : "#EBECEE")};  // Define a cor de fundo com base nas propriedades
  width: ${(props) => props.size}px; / Define a largura com base na propriedade size
  height: ${(props) => props.size}px;  // Define a altura com base na propriedade size
  border-radius: ${(props) => (props.isDelete || props.isEmpty ? "0px" : "50px")};  // Define o raio da borda com base nas propriedades
`;

const DialPadText = styled.Text`
  color: #3f1d38; // Define a cor do texto
  font-size: ${(props) => props.size}px;  // Define o tamanho da fonte com base na propriedade size
   font-family: MontserratAlternates_600SemiBold; // Define a fonte do texto

`;

const DeleteIcon = styled(Feather).attrs({
  name: "delete",    // Define o nome do ícone
  color: "#D75353",  // Define a cor do ícone
})`
  font-size: ${(props) => props.size}px;
`;