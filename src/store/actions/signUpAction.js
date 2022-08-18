import { api } from "../../api"

export const handleSignUp = async (values, dispatch, navigate) => {
  try {
    const { data } = await api.post("/usuario/create-user", values);
    localStorage.setItem('token', data.token);
    api.defaults.headers.common['Authorization'] = data.token;

    dispatch({type: "SET_LOGIN", token: data.token});
    alert("Usuário criado!");

    navigate('/');
    console.log("chegou aqui")
  } catch(error) {
    console.log(`Erro -> ${error}`);
  }
}