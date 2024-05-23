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
      const response = await axios.post("http://54.67.52.140/users/", data,options);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário: " + error.message);
    }
  }
};

export default UsuarioService;