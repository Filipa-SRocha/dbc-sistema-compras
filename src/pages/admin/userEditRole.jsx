import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";

import { BiUserCircle, BiRename, BiArrowBack } from 'react-icons/bi';
import { MdOutlineEmail, MdWorkOutline } from 'react-icons/md';
import { UserRoleInfo, RoleButton, UserRoleContainer, RoleEdit } from "./userEditRole.styled";
import { Errors } from '../../components/forms/form.styled'

import { editUserRole } from "../../store/actions/adminActions";

const UserEditRole = () => {

  const imgBase64Prefix = 'data:image/png;base64,';
  const navigate = useNavigate();

  const newUserSchema = Yup.object().shape({
    cargo: Yup.string().required('Por favor indique o cargo')
  });
  
  const { state } = useLocation();
  
  const userCurrentRole = state.cargos.length === 1 ? state.cargos[0].name.replace(/ROLE_([A-Za-z])([A-Za-z]*)/, (p0, p1, p2) => { return (p1 + p2.toLowerCase()) }) : 'Administrador';
  
  return (
    <UserRoleContainer>
      <UserRoleInfo>
        <div className='userProfile'>
          <div className="userInfo">
            { 
              state.imagemPerfilB64 ? 
              <img src={imgBase64Prefix+state.imagemPerfilB64} alt="Imagem do usuário" className='profilePicture' />
              :
              <BiUserCircle
                className='profileIcon' />
            }
            <div className="nomeEEmail">
              <div className="userNome">
                <BiRename />
                <strong>Nome:</strong>
                <span>{state.nome}</span>
              </div>
              <div className="userEmail">
                <MdOutlineEmail />
                <strong>E-mail:</strong>
                <span>{state.email}</span>
              </div>
              <div className="userRole">
                <MdWorkOutline />
                <strong>Cargo:</strong>
                <span>{userCurrentRole}</span>
              </div>
            </div>
          </div>
          
        </div>
      </UserRoleInfo>
        <h2>Editar cargo</h2>
      <RoleEdit>
        <Formik
          initialValues={{cargo: ''}}
          validationSchema={newUserSchema}
          onSubmit={(values) => {editUserRole(state.idUser, values)}}
        >
          {({ errors, touched, setFieldValue}) => (
            <Form id="edit-user-role-form" className='editRoleForm'>
              <label htmlFor="cargo">Novo cargo</label>
              <Field
                id='cargo'
                name='cargo'
                as='select'
                onChange={(e) => {setFieldValue('cargo', e.target.value)}}
              >
                <option value="" hidden>Selecione o novo cargo</option>
                <option value='ADMINISTRADOR'>Administrador</option>
								<option value='COLABORADOR'>Colaborador</option>
								<option value='COMPRADOR'>Comprador</option>
								<option value='GESTOR'>Gestor</option>
								<option value='FINANCEIRO'>Financeiro</option>
              </Field>

              {errors.cargo && touched.cargo ?
              (<Errors>{errors.cargo}</Errors>)
              : null}

              <button type="submit">Editar cargo</button>
            </Form>
          )}
        </Formik>
        
      </RoleEdit>
    </UserRoleContainer>
  )
}
export default UserEditRole