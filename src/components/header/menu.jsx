import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiLockPasswordFill, RiLogoutBoxLine } from 'react-icons/ri';
import { MenuItemContainer } from './menu.styled';
import { handleLogout } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const menu = ({dispatch}) => {
  return (
    <MenuItemContainer>
      <Link to="/user" className="menuItem" id='menu-link-perfil'><AiOutlineUser />Perfil</Link>
      <Link to="/user/change-info" className="menuItem" id='menu-link-editar-perfil'><FiEdit />Editar perfil</Link>
      <Link to="/user/change-password" className="menuItem" id='menu-link-mudar-senha'><RiLockPasswordFill />Mudar senha</Link>
      <button className="menuItem" id='menu-link-sair' onClick={() => {handleLogout(dispatch)}}><RiLogoutBoxLine />Sair</button>
    </MenuItemContainer>
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(menu)