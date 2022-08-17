import { BiUserCircle } from 'react-icons/bi';
import { HeaderComponent } from './header.styled';
import { useEffect } from 'react';
import { getLoggedUser } from '../../store/actions/userActions';
import { connect } from 'react-redux';

const Header = ({ dispatch, user }) => {

  const imgBase64Prefix = 'data:image/png;base64,'
  
  useEffect(() => {
		// console.log("chegou aqui no use effect");
		getLoggedUser(dispatch);
    // console.log(user.imagemPerfilB64)
	}, [])

  return (
    <HeaderComponent>
      <span>{user.nome}</span>
      {
        user.imagemPerfilB64 ? 
        <img src={imgBase64Prefix+user.imagemPerfilB64} alt="Imagem de perfil" className='profilePicture' /> 
        : 
        <BiUserCircle /> 
      }
    </HeaderComponent>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
})

export default connect(mapStateToProps)(Header);