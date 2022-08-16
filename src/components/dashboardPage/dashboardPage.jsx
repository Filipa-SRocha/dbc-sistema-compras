import {
	Container,
	DashboardContainer,
	PageContent,
} from './dashboardPage.style';
import Header from '../header/header';
import AsideMenu from '../asideMenu/asideMenu';

const DashboardPage = ({ title, children }) => {
	return (
		<section>
			<Container>
				<AsideMenu></AsideMenu>
				<DashboardContainer>
					<Header />
					<h2>{title}</h2>
					<PageContent>{children}</PageContent>
				</DashboardContainer>
			</Container>
		</section>
	);
};
export default DashboardPage;
