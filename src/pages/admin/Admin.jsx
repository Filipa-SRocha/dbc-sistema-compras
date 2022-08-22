import ListUsers from './listUsers';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	Container,
	DashboardContainer,
} from '../../pages/dashboard/dashboard.styled.js';
import AsideMenu from '../../components/asideMenu/asideMenu';
import Header from '../../components/header/header';
import { AdminPageTitle, AdminHeader, AddUserButton } from './admin.styled';
import { BsPersonPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Admin = ({ user }) => {
	const navigate = useNavigate();

	// if(!user.isAdmin) {
	//   return <Navigate to='/' />;
	// }

	return (
		<>
			<Container>
				<AsideMenu nowActive={'/admin'} />
				<DashboardContainer>
					<Header />
					<AdminHeader>
						<AdminPageTitle>Lista de usuários</AdminPageTitle>
						<AddUserButton
							onClick={() => {
								navigate('/admin/new-user');
							}}
						>
							<BsPersonPlusFill size={20} />
							Adicionar novo usuário
						</AddUserButton>
					</AdminHeader>
					<ListUsers />
				</DashboardContainer>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => ({
	user: state.userReducer.user,
});

export default connect(mapStateToProps)(Admin);
