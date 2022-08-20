import { UserComponent, UserItemLabel, RoleButton, RoleButtonsContainer } from "./listUsers.styled";
import { FiEdit } from 'react-icons/fi';
import { MdPersonAdd, MdPersonOff } from 'react-icons/md';
import { BsPersonPlusFill, BsPersonDashFill } from 'react-icons/bs';

const UserBeingListed = ({ user }) => {

  const nomeCargo = user.cargos.name.replace(/ROLE_([A-Za-z])([A-Za-z]*)/, (p0, p1, p2) => { return (p1 + p2.toLowerCase()) });


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
          <RoleButton><FiEdit /></RoleButton>
          <RoleButton><BsPersonPlusFill /></RoleButton>
          <RoleButton><BsPersonDashFill /></RoleButton>
        </RoleButtonsContainer>
      </UserItemLabel>
    </UserComponent>
  )
}
export default UserBeingListed