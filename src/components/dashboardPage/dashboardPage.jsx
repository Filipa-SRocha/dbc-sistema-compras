import {
	Container,
	DashboardContainer,
	PageContent,
} from './dashboardPage.style';
import Header from '../header/header';
import AsideMenu from '../asideMenu/asideMenu';

const DashboardPage = ({ title, page, children }) => {
	return (
		<section>
			<Container>
				<AsideMenu nowActive={page}></AsideMenu>
				<DashboardContainer>
					<Header />
					<h2>{title}</h2>
					{children}
				</DashboardContainer>
			</Container>
		</section>
	);
};
export default DashboardPage;
