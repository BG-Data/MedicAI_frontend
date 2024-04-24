import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputContainer1: {
      backgroundColor: '#ffffff', // Cor de fundo branca para o contêiner do campo de email
      borderRadius: 15, // Borda arredondada
      marginBottom: 10, // Margem inferior para espaçamento
      paddingHorizontal: 15, // Preenchimento horizontal para espaçamento interno
      width: '90%', // Largura do contêiner (ajuste conforme necessário)
      flexDirection: 'row', // Alinha itens horizontalmente
      alignItems: 'center', // Alinha itens verticalmente
      marginBottom: 15, // Adicione margem inferior conforme necessário
    },

    inputContainer: {
      backgroundColor: '#ffffff', // Cor de fundo branca para o contêiner do campo de email
      borderRadius: 15, // Borda arredondada
      marginBottom: 10, // Margem inferior para espaçamento
      paddingHorizontal: 15, // Preenchimento horizontal para espaçamento interno
      width: '90%', // Largura do contêiner (ajuste conforme necessário)
      flexDirection: 'row', // Alinha itens horizontalmente
      alignItems: 'center', // Alinha itens verticalmente
      marginBottom: 15, // Adicione margem inferior conforme necessário
    },


    emailPlaceholder: {
      color: '#069E6E', // Cor do texto do placeholder do email
    },

    header: {
      paddingVertical: 40,
      width: '100%', // Largura total para o cabeçalho ocupar toda a largura da tela
      alignItems: 'center',
      position: 'absolute', // Posicionar absolutamente em relação ao contêiner pai
      top: 0, // Posicionar no topo do contêiner pai
    },
    
    headerText: {
      color: '#069E6E', // Cor do texto do cabeçalho
      fontSize: 18,
      textAlign: 'center',
    },
  
    icon: {
      marginRight: 10,
      alignSelf: 'center', // Centraliza verticalmente o ícone
    },

    linkText: {
      color: '#069E6E', // Cor do link
      textAlign: 'center',
    },

    linkContainer: {
      marginBottom: 20, // Espaço entre links
    },

    link: {
      color: '#069E6E', // Cor do link
      fontWeight: 'bold',
    },

    input: {
      width: '80%',
      marginBottom: 15,
    },

    customButton: {
      backgroundColor: '#069E6E',
      borderRadius: 15,
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderWidth: 1,
      borderColor: '#6D6D6D',
      marginTop: 20,
    },

    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },

    apresentacao: {
      alignItems: 'center', // Centraliza os itens horizontalmente
      marginBottom: 20, // Espaçamento inferior
      paddingHorizontal: 20, // Preenchimento horizontal
    },
  
    apresentacaoText: {
      textAlign: 'center', // Centraliza o texto horizontalmente
      width: '80%', // Define a largura do texto
    },

    CampoIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },

  });

export default styles