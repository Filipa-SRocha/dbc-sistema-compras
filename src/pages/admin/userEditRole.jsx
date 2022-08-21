import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { editUserRole } from "../../store/actions/adminActions";
import { UserRoleInfo, UserLabelAndInfo, UserRoleContainer } from "./userEditRole.styled";

const UserEditRole = () => {
  
  const { state } = useLocation();
  // console.log(state);
  const selectRole = useRef(null);
  
  const userCurrentRole = state.cargos[0].name.replace(/ROLE_([A-Za-z])([A-Za-z]*)/, (p0, p1, p2) => { return (p1 + p2.toLowerCase()) });
  
  return (
    <UserRoleContainer>
      <UserRoleInfo>
        <strong>Informações do usuário</strong>
        <UserLabelAndInfo>
          <span>Nome:</span>
          <span>{state.nome}</span>
        </UserLabelAndInfo>
        
        <UserLabelAndInfo>
          <span>E-mail:</span>
          <span>{state.email}</span>
        </UserLabelAndInfo>
        <UserLabelAndInfo>
          <span>Cargo:</span>
          <span>{userCurrentRole}</span>
        </UserLabelAndInfo>
      </UserRoleInfo>
      <strong>Editar cargo</strong>
      <form onSubmit={(e) => {
        e.preventDefault();

        editUserRole(state.idUser, selectRole.current.value);
      }}>
        <select name="userRole" ref={selectRole} id="user-role-select">
          <option disabled value> </option>
          <option value="COLABORADOR">Colaborador</option>
          <option value="FINANCEIRO">Financeiro</option>
          <option value="COMPRADOR">Comprador</option>
          <option value="GESTOR">Gestor</option>
          <option value="ADMINISTRADOR">Administrador</option>
        </select>
      <button type="submit">Editar cargo</button>
      </form>
    </UserRoleContainer>
  )
}
export default UserEditRole