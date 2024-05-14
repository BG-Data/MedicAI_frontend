import axios from "axios";

const UsuarioService = {
  async cadastrar(data) {
    try {
      const options = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.post("http://3.101.57.70/users/", data,options);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário: " + error.message);
    }
  }
};

export default UsuarioService;