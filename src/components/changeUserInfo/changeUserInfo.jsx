import { ChangeInfoContainer } from './changeUserInfo.styled';
import { updateUserInfo } from '../../store/actions/userActions';

import { FiEdit } from 'react-icons/fi';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FileBase64 from 'react-file-base64';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const ChangeUserInfo = ({ user, dispatch, updateUser }) => {
  
  const UserSchema = Yup.object().shape({
		nome: Yup.string()
			.min(4, 'Nome demasiado curto!')
			.max(60, 'Login demasiado longo!'),
		email: Yup.string()
			.email('Formato de e-mail inválido')
	});

  const getFiles = (files, setFieldValue) => {
		// setTesteImagem({ ...files });
		const imgCode = files.base64.split(',');
		const imgBase64 = imgCode[1];
		setFieldValue("foto", imgBase64);
		// console.log(imgBase64);
	};

  // useEffect(()=> {
  //   if(!user.idUser){

  //   }
  //  }, [])

  return (
    <ChangeInfoContainer>
      <h3><FiEdit />Editar perfil</h3>
      <div className="form">
        <Formik
          enableReinitialize
          initialValues={{
            nome: user.nome,
            email: user.email,
            foto: user.imagemPerfilB64
          }}
          validationSchema={UserSchema}
          onSubmit={(values) => {
            updateUser(values, user);
          }}
          >
            {({errors, touched, setFieldValue}) => (
                <Form>
                <div className="formCampo">
                  <label htmlFor="nome">Nome</label>
                  <Field name='nome' placeholder='Nome completo' />
                </div>
                <div className="formCampo">
                  <label htmlFor="email">E-mail</label>
                  <Field name='email' placeholder='email@dbccompany.com.br' />
                </div>
                <div className="imgPerfil">
                  <label htmlFor='foto'>Imagem de perfil</label>
                  <FileBase64
                    name='foto'
                    multiple={false}
                    onDone={e => getFiles(e, setFieldValue)}
                    className='fileBase64'
                  />
                </div>
                <button type="submit">Atualizar</button>
              </Form>
            )}
          </Formik>
      </div>
    </ChangeInfoContainer>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (values, user) => updateUserInfo(values, user, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserInfo);