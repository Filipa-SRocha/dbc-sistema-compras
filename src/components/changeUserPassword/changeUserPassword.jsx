import { RiLockPasswordFill } from 'react-icons/ri';
import { ChangePasswordContainer } from './changeUserPassword.styled';
import { updateUserPassword } from '../../store/actions/userActions';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useNavigate } from 'react-router-dom';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';

const ChangeUserPassword = () => {
  
  const navigate = useNavigate();
  
  YupPassword(Yup);

  const newPasswordSchema = Yup.object().shape({
    senhaAtual: Yup.string()
      .required('Por favor digite sua senha atual'),
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
            <Form id='form-user-edit-password'>
              <div className="formCampo">
                <label htmlFor="senhaAtual" id='user-edit-password-senha-atual-label'>Senha atual</label>
                <Field name='senhaAtual' id='user-edit-password-senha-atual' type='password' placeholder='********'
                />
                {errors.senhaAtual && touched.senhaAtual ? (
                  <Errors>{errors.senhaAtual}</Errors>
                    ) : null}
              </div>
              <div className="formCampo">
                <label htmlFor="novaSenha" id='user-edit-password-nova-senha-label'>Nova senha</label>
                <Field name='novaSenha' id='user-edit-password-nova-senha' type='password' placeholder='********' />
                {errors.novaSenha && touched.novaSenha ? (
                  <Errors>{errors.novaSenha}</Errors>
                    ) : null}
              </div>
              <div className='button'>
                <PrimaryButton type="submit" text="Atualizar senha" />
              </div>
            </Form>
          )}

        </Formik>
      </div>
    </ChangePasswordContainer>
  )
}
export default ChangeUserPassword