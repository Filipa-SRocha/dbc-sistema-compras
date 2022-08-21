import DashboardPage from "../../components/dashboardPage/dashboardPage"
import UserEditRole from "./userEditRole"

const UserDetailByAdmin = () => {
  return (
    <>
      <DashboardPage title="Informações do usuário" page={'/admin/user-detail'} children={<UserEditRole />} />
    </>
  )
}
export default UserDetailByAdmin