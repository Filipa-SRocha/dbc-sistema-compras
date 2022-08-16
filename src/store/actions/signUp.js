import { api } from "../../api"

export const handleSignUp = async (values, navigate) => {
  try {
    const { data: token } = await api.post("/usuario/create-user", values);
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = token;
    console.log(token);

    // dispatch({type: "SET_SIGNUP", token: token});
    alert("Usuário criado!");

    navigate('/login');
    console.log("chegou aqui")
  } catch(error) {
    console.log(`Erro -> ${error}`);
  }
}