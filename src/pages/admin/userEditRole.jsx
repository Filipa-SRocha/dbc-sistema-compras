import { BiUserCircle, BiRename, BiArrowBack } from 'react-icons/bi';
import { MdOutlineEmail, MdWorkOutline } from 'react-icons/md';

import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editUserRole } from "../../store/actions/adminActions";
import { UserRoleInfo, RoleButton, UserRoleContainer, RoleEdit, BackButton } from "./userEditRole.styled";

const UserEditRole = () => {

  const imgBase64Prefix = 'data:image/png;base64,';
  const navigate = useNavigate();
  
  const { state } = useLocation();
  // console.log(state);
  const selectRole = useRef(null);
  
  const userCurrentRole = state.cargos.length === 1 ? state.cargos[0].name.replace(/ROLE_([A-Za-z])([A-Za-z]*)/, (p0, p1, p2) => { return (p1 + p2.toLowerCase()) }) : 'Administrador';
  
  return (
    <UserRoleContainer>
     <div className="goBackButton">
      <BackButton onClick={() => {navigate('/admin')}}><BiArrowBack size={26} /></BackButton>
     </div>
      <UserRoleInfo>
        <div className='userProfile'>
          <div className="userInfo">
            { 
              state.imagemPerfilB64 ? 
              <img src={imgBase64Prefix+state.imagemPerfilB64} alt="Imagem do usuário" className='profilePicture' />
              :
              <BiUserCircle
                className='profileIcon' />
            }
            <div className="nomeEEmail">
              <div className="userNome">
                <BiRename />
                <strong>Nome:</strong>
                <span>{state.nome}</span>
              </div>
              <div className="userEmail">
                <MdOutlineEmail />
                <strong>E-mail:</strong>
                <span>{state.email}</span>
              </div>
              <div className="userRole">
                <MdWorkOutline />
                <strong>Cargo:</strong>
                <span>{userCurrentRole}</span>
              </div>
            </div>
          </div>
          
        </div>
      </UserRoleInfo>
        <h2>Editar cargo</h2>
      <RoleEdit>
        <form className='editRoleForm' onSubmit={(e) => {
          e.preventDefault();

          editUserRole(state.idUser, selectRole.current.value);
        }}>
          <select name="userRole" ref={selectRole} id="user-role-select">
            <option disabled selected value></option>
            <option value="COLABORADOR">Colaborador</option>
            <option value="FINANCEIRO">Financeiro</option>
            <option value="COMPRADOR">Comprador</option>
            <option value="GESTOR">Gestor</option>
            <option value="ADMINISTRADOR">Administrador</option>
          </select>
        <RoleButton type="submit">Editar cargo</RoleButton>
        </form>
      </RoleEdit>
    </UserRoleContainer>
  )
}
export default UserEditRole