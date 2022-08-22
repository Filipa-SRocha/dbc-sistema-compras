import { manageFinancesApproval } from '../../store/actions/financesAction';

const FinancesMenu = ({ idCompra, dispatch }) => {
	return (
		<div>
			<button
				value='APROVAR'
				onClick={(e) =>
					manageFinancesApproval(idCompra, e.target.value, dispatch)
				}
			>
				Aprovar
			</button>
			<button
				value='REPROVAR'
				onClick={(e) =>
					manageFinancesApproval(idCompra, e.target.value, dispatch)
				}
			>
				Reprovar
			</button>
		</div>
	);
};
export default FinancesMenu;
