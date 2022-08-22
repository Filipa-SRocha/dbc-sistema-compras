import { manageQuotation } from '../../store/actions/managerActions';

const ManagerMenu = ({ idCotacao, dispatch }) => {
	return (
		<div>
			<button
				value='APROVAR'
				onClick={(e) => {
					manageQuotation(idCotacao, e.target.value, dispatch);
				}}
			>
				Aprovar
			</button>
			<button
				value='REPROVAR'
				onClick={(e) => {
					manageQuotation(idCotacao, e.target.value, dispatch);
				}}
			>
				Reprovar
			</button>
		</div>
	);
};
export default ManagerMenu;
