import DashboardPage from "../../components/dashboardPage/dashboardPage";
import ListUsers from "./listUsers";

const Admin = () => {
  return (
    <>
      <DashboardPage title="Lista de usuários" page={'/admin'} children={<ListUsers />} />
    </>
  )
}
export default Admin