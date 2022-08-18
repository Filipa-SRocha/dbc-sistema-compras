import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';

const PurchaseDetails = ({ dispatch, purchaseToShow }) => {
	const { idCompra } = useParams();

	return (
		<DashboardPage title={purchaseToShow.name} page='#'>
			<p>{purchaseToShow.descricao}</p>
			<div>
				<h4>Itens</h4>
				{purchaseToShow.itens ? (
					purchaseToShow.itens.map((item) => (
						<p key={item.idItem}>
							{item.quantidade} {item.nome}
						</p>
					))
				) : (
					<p>Não existem itens cadastrados!</p>
				)}
			</div>
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
});

export default connect(mapStateToProps)(PurchaseDetails);
