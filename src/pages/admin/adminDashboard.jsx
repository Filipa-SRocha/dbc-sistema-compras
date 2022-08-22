import AsideMenu from "../../components/asideMenu/asideMenu";
import Header from "../../components/header/header";
import { Container, DashboardContainer } from "../dashboard/dashboard.styled";

const AdminDashboard = () => {
	return (
	<div>
		<Container>
			<AsideMenu />
			<DashboardContainer>
				<Header />
			</DashboardContainer>
		</Container>;
	</div>)
};
export default AdminDashboard;
