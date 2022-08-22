import { UserComponent, UserItemLabel, RoleButton, DeleteButton, RoleButtonsContainer } from "./listUsers.styled";
import { FiEdit } from 'react-icons/fi';
import { BsPersonDashFill } from 'react-icons/bs';
import { deleteUser } from "../../store/actions/adminActions";
import { useNavigate } from "react-router-dom";

const UserBeingListed = ({ user }) => {

  const nomeCargo = user.cargos.length === 1 ? user.cargos[0].name.replace(/ROLE_([A-Za-z])([A-Za-z]*)/, (p0, p1, p2) => { return (p1 + p2.toLowerCase()) }) : 'Administrador';

  const navigate = useNavigate();

  return (

    <UserComponent>
      <UserItemLabel>
        <strong>Nome:</strong>
        <span>{user.nome}</span>
      </UserItemLabel>
      <UserItemLabel>
        <strong>E-mail:</strong>
        <span>{user.email}</span>
      </UserItemLabel>
      <UserItemLabel>
        <strong>Cargo:</strong>
        <span>{nomeCargo}</span>
        <RoleButtonsContainer>
          <RoleButton onClick={() => {navigate('/admin/user-detail', { state: user })}}><FiEdit /></RoleButton>
          <DeleteButton onClick={() => {deleteUser(user.idUser)}}><BsPersonDashFill /></DeleteButton>
        </RoleButtonsContainer>
      </UserItemLabel>
    </UserComponent>
  )
}
export default UserBeingListed