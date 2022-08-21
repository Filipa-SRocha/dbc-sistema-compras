import { ChangeInfoContainer } from './changeUserInfo.styled';
import { updateUserInfo } from '../../store/actions/userActions';

import { FiEdit } from 'react-icons/fi';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FileBase64 from 'react-file-base64';
import { connect } from 'react-redux';
import { Errors } from '../forms/form.styled';
import { PrimaryButton } from '../buttons/buttons';
// import { useEffect } from 'react';

const ChangeUserInfo = ({ user, dispatch, updateUser }) => {
  
  const UserSchema = Yup.object().shape({
		nome: Yup.string()
      .required('Por favor digite seu nome')
			.min(4, 'Nome demasiado curto!')
			.max(60, 'Login demasiado longo!'),
		email: Yup.string()
      .required('Por favor digite seu novo e-mail')
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
            updateUser(values);
          }}
          >
            {({errors, touched, setFieldValue}) => (
                <Form id='form-user-edit-info'>
                <div className="formCampo">
                  <label htmlFor="nome" id='user-edit-info-nome-label'>Nome</label>
                  <Field name='nome' id='user-edit-info-nome' placeholder='Nome completo'
                    onChange={e => {
                      setFieldValue("nome", e.target.value);
                  }}
                  />
                  {errors.nome && touched.nome ? (
                      <Errors>{errors.nome}</Errors>
                    ) : null}
                </div>
                <div className="formCampo">

                  <label htmlFor="email" id='user-edit-info-email-label'>E-mail</label>
                  <Field name='email' id='user-edit-info-email' placeholder='email@dbccompany.com.br'
                  onChange={e => {
                    setFieldValue("email", e.target.value);
                  }}
                  />

                  <div className="erros">
                    {errors.email && touched.email ? (
                      <Errors>{errors.email}</Errors>
                    ) : null}
                  </div>
                </div>
                <div className="imgPerfil">
                  <label htmlFor='foto' id='user-edit-info-imagem-label'>Imagem de perfil</label>
                  <FileBase64
                    name='foto'
                    id='user-edit-info-imagem'
                    multiple={false}
                    onDone={e => getFiles(e, setFieldValue)}
                    className='fileBase64'
                  />
                </div>
                <div className="button">
                  <PrimaryButton type="submit" id='user-edit-info-button-submit' text="Atualizar perfil" />
                </div>
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
  updateUser: (values) => updateUserInfo(values, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserInfo);