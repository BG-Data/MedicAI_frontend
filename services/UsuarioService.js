import axios from "axios";

const UsuarioService = {
  async cadastrar(data) {
    try {
      console.log("enviando dados para cadastrar usuário:", data);
      const response = await axios.post("http://3.101.57.70/user/", data);
      console.log("resposta da API", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      throw new Error("Erro ao cadastrar usuário: " + error.message);
    }
  }
};

export default UsuarioService;