import { useNavigate } from "react-router-dom";
import AsideMenu from "../../components/asideMenu/asideMenu";
import Header from "../../components/header/header";
import { Container, DashboardContainer } from "../dashboard/dashboard.styled";
import { AdminContainer } from "./adminDashboard.styled";
import { GrUserWorker, GrUserManager } from 'react-icons/gr';
import { BsCashCoin } from 'react-icons/bs'
import { GiMoneyStack } from 'react-icons/gi'


const AdminDashboard = () => {
	
	const navigate = useNavigate();
	
	return (
	<div>
		<Container>
			<AsideMenu />
			<DashboardContainer>
				<Header />
				<AdminContainer>
					<h1>Acessar telas dos cargos</h1>
					<div className="telas">
						<button className="cargo" onClick={() => {navigate('/colaborador')}}>
							<GrUserWorker size={34} />
							<span>Colaborador</span>
						</button>
						<button className="cargo" onClick={() => {navigate('/comprador')}}>
							<BsCashCoin size={34} />
							<span>Comprador</span>
						</button>
						<button className="cargo" onClick={() => {navigate('/gestor')}}>
							<GrUserManager size={34} />
							<span>Gestor</span>
						</button>
						<button className="cargo" onClick={() => {navigate('/financeiro')}}>
							<GiMoneyStack size={34} />
							<span>Financeiro</span>
						</button>
						
					</div>
				</AdminContainer>
			</DashboardContainer>
		</Container>
	</div>)
};
export default AdminDashboard;
