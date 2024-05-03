import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
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
      height: 60,
    },

    header: {
      paddingVertical: 20,
      width: '100%',
      alignItems: 'center',
      top: 0, // Posicionar no topo do contêiner pai
    },
    
    headerText: {
      color: '#069E6E',
      fontSize: 18,
      textAlign: 'center',
    },
  
    icon: {
      marginRight: 10,
      alignSelf: 'center',
    },

    linkText: {
      color: '#069E6E',
      textAlign: 'center',
    },

    linkContainer: {
      marginBottom: 20,
    },

    link: {
      color: '#069E6E',
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
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 20,
    },
  
    apresentacaoText: {
      textAlign: 'center',
      width: '80%',
    },

    CampoIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },

    containerhome: {

    },

    column: {
      flexDirection: 'column',
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 0,
    },

    cardContainer: {
      justifyContent: 'center',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      flex: 1,
    },

    cardWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },

  });

export default styles