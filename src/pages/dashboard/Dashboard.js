import AsideMenu from "../../components/asideMenu/asideMenu";
import { Container, DashboardContainer } from "./dashboard.styled";
import Header from "../../components/header/header";
import PurchaseList from "../../components/purchaseList/purchaseList";
import { useEffect } from "react";
import { getLoggedUser } from "../../store/actions/userActions";
import { connect } from "react-redux";

const Dashboard = ({ dispatch, user }) => {
	useEffect(() => {
		console.log("chegou aqui no use effect");
		getLoggedUser(dispatch);
	}, [])

	return (<div>
		<Container>
			<AsideMenu></AsideMenu>
			<DashboardContainer>
				<Header nomeUsuario={user.nome} />
				<PurchaseList />
			</DashboardContainer>
		</Container>
	</div>);
};

const mapStateToProps = (state) => ({
	user: state.userReducer.user
});

export default connect(mapStateToProps)(Dashboard);
