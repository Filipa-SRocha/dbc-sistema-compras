import { BiUserCircle } from 'react-icons/bi';
import { HeaderComponent } from './header.styled';
import { useEffect, useState } from 'react';
import { getLoggedUser } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import Menu from './menu';

const Header = ({ dispatch, user }) => {

  const imgBase64Prefix = 'data:image/png;base64,';
  const [menuToggle, setMenuToggle] = useState(false);
  
  useEffect(() => {
		// console.log("chegou aqui no use effect");
		getLoggedUser(dispatch);
    // console.log(user.imagemPerfilB64)
    // console.log(menuToggle)
	}, [])

  return (
    <HeaderComponent onClick={() => {if(menuToggle){ setMenuToggle(!menuToggle) }}}>
      <button onClick={() => setMenuToggle(!menuToggle)}>
        <span>{user.nome}</span>
        {
          user.imagemPerfilB64 ? 
          <img src={imgBase64Prefix+user.imagemPerfilB64} alt="Imagem de perfil" className='profilePicture' /> 
          : 
          <BiUserCircle size={30} /> 
        }
      </button>
      {menuToggle && <Menu />}
    </HeaderComponent>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
})

export default connect(mapStateToProps)(Header);