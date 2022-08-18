import { RiLockPasswordFill } from 'react-icons/ri';
import { ChangePasswordContainer } from './changeUserPassword.styled';
import { updateUserPassword } from '../../store/actions/userActions';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useNavigate } from 'react-router-dom';

const ChangeUserPassword = () => {
  
  const navigate = useNavigate();
  
  YupPassword(Yup);

  const newPasswordSchema = Yup.object().shape({
    novaSenha: Yup.string()
			.required('Por favor digite uma senha forte')
			.password()
			.minLowercase(1, 'Senha precisa conter pelo menos uma letra minuscula')
			.minUppercase(1, 'Senha precisa conter pelo menos uma letra maiuscula')
			.minNumbers(1, 'Senha precisa conter pelo menos um número')
			.minSymbols(1, 'Senha precisa conter pelo menos um caractere especial')
			.min(8, 'Senha precisa conter pelo menos oito caracteres'),
  })
  
  return (
    <ChangePasswordContainer>
      <h3><RiLockPasswordFill />Mudar senha</h3>
      <div className="form">
        <Formik
          initialValues={{
            senhaAtual: "",
            novaSenha: ""
          }}
          validationSchema={newPasswordSchema}
          onSubmit={(values) => {
            updateUserPassword(values, navigate);
          }}
        >
          {({errors, touched}) => (
            <Form>
              <div className="formCampo">
                <label htmlFor="senhaAtual">Senha atual</label>
                <Field name='senhaAtual' type='password' placeholder='********' />
              </div>
              <div className="formCampo">
                <label htmlFor="novaSenha">Nova senha</label>
                <Field name='novaSenha' type='password' placeholder='********' />
              </div>
              <button type="submit">Atualizar Senha</button>
            </Form>
          )}

        </Formik>
      </div>
    </ChangePasswordContainer>
  )
}
export default ChangeUserPassword