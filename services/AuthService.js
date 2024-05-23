import axios from 'axios';

const AuthService = {
  async login(data) {
    try {
        const options = {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          };

      const response = await axios.post("http://54.67.52.140/auth", data,options);
      return response.data;
    } catch (error) {
        if (error) {
          // Se a resposta for recebida do servidor, mas com um código de status que indica um erro
          console.error("Erro de resposta da API:", error.response.status);
        } else if (error.request) {
          // Se a solicitação foi feita, mas não recebeu resposta do servidor
          console.error("Não foi possível receber resposta do servidor.");
        } else {
          // Se ocorreu um erro durante a configuração da solicitação
          console.error("Erro ao configurar solicitação:", error.message);
        }
        throw new Error('Ocorreu um erro durante o login');
      }
    },
};

export default AuthService;
