import DashboardPage from "../../components/dashboardPage/dashboardPage";
import UserEditRole from "./userEditRole";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

const UserDetailByAdmin = ({ user }) => {
  
  if(!user.isAdmin) {
    return <Navigate to='/' />;
  }
  
  return (
    <>
      <DashboardPage title="Informações do usuário" page={'/admin/user-detail'} children={<UserEditRole />} />
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
})

export default connect(mapStateToProps)(UserDetailByAdmin)