import AsideMenu from "../../components/asideMenu/asideMenu";
import { Container, DashboardContainer } from "./dashboard.styled";
import Header from "../../components/header/header";
import PurchaseList from "../../components/purchaseList/purchaseList";

const Dashboard = () => {

	return (<div>
		<Container>
			<AsideMenu></AsideMenu>
			<DashboardContainer>
				<Header />
				<PurchaseList />
			</DashboardContainer>
		</Container>
	</div>);
};


export default Dashboard;
