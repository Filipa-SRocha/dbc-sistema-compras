import { BiUserCircle, BiRename, BiArrowBack } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { RiLockPasswordFill } from 'react-icons/ri';

import AsideMenu from '../../components/asideMenu/asideMenu';
import ChangeUserInfo from '../../components/changeUserInfo/changeUserInfo';
import { UserGlobalContainer, UserContainer, Button } from './User.styled'

import { useEffect, useState } from "react";
import { getLoggedUser } from "../../store/actions/userActions";
import { connect } from "react-redux";
import ChangeUserPassword from '../../components/changeUserPassword/changeUserPassword';

import { useNavigate } from 'react-router-dom';

const User = ({ dispatch, user, changeType }) => {
  
  const imgBase64Prefix = 'data:image/png;base64,';
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(user)

    if(!user.idUser){
      getLoggedUser(dispatch)
    }

  }, []);

  // console.log(changeType)
  // console.log(user)

  return (
    <UserGlobalContainer>
      <AsideMenu />
      <div className="contentContainer">
        <UserContainer>
          <div className='userProfile'>
            <div className="userInfo">
              {
                user.imagemPerfilB64 ? 
                <img src={imgBase64Prefix+user.imagemPerfilB64} alt="Imagem de perfil" className='profilePicture' /> 
                : 
                <BiUserCircle className='profileIcon' /> 
              }
              <div className="nomeEEmail">
                <div className="userNome">
                  <BiRename />
                  <strong>Nome:</strong>
                  <span>{user.nome}</span>
                </div>
                <div className="userEmail">
                  <MdOutlineEmail />
                  <strong>E-mail:</strong>
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
            <div className='userEdit'>
                {(changeType === 'info' || changeType === 'password') && <Button onClick={() => navigate('/')}><BiArrowBack />Voltar para home</Button>}
                {(changeType === 'password' || !changeType) && <Button onClick={() => {navigate('/user/change-info')}}><FiEdit />Editar perfil</Button>}
                {(changeType === 'info' || !changeType) && <Button onClick={() => {navigate('/user/change-password')}}><RiLockPasswordFill />Mudar senha</Button>}
            </div>
          </div>
        </UserContainer>
        {/* {(changeType === 'info' || changeType === 'password') && <ChangeUserInfo userData={user} />} */}
        {changeType === 'info' && <ChangeUserInfo userData={user} />}
        {changeType === 'password' && <ChangeUserPassword />}
      </div>
    </UserGlobalContainer>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
})

export default connect(mapStateToProps)(User);