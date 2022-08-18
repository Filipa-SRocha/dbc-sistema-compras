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
      <Link to="/user" className="menuItem"><AiOutlineUser />Perfil</Link>
      <Link to="/user/change-info" className="menuItem"><FiEdit />Editar perfil</Link>
      <Link to="/user/change-password" className="menuItem"><RiLockPasswordFill />Mudar senha</Link>
      <button className="menuItem" onClick={() => {handleLogout(dispatch)}}><RiLogoutBoxLine />Sair</button>
    </MenuItemContainer>
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(menu)