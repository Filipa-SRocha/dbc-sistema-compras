import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MenuItemContainer } from './menu.styled'

const menu = () => {
  return (
    <MenuItemContainer>
      <Link to="/user" className="menuItem"><AiOutlineUser />Perfil</Link>
      <Link to="/user/change-info" className="menuItem"><FiEdit />Editar perfil</Link>
      <Link to="/user/change-password" className="menuItem"><RiLockPasswordFill />Mudar senha</Link>
    </MenuItemContainer>
  )
}
export default menu