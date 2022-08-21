import DashboardPage from "../../components/dashboardPage/dashboardPage";
import ListUsers from "./listUsers";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

const Admin = ({ user }) => {

  // if(!user.isAdmin) {
  //   return <Navigate to='/' />;
  // }
  
  return (
    <>
      <DashboardPage title="Lista de usuários" page={'/admin'} children={<ListUsers />} />
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

export default connect(mapStateToProps)(Admin)