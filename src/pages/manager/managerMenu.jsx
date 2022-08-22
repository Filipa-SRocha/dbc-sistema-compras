import { manageQuotation } from '../../store/actions/managerActions';

export const ManagerMenu = ({ idCotacao, dispatch }) => {
	return (
		<button
			value='APROVAR'
			onClick={(e) => {
				manageQuotation(idCotacao, e.target.value, dispatch);
			}}
		>
			Aprovar
		</button>
	);
};

export const CancelQuotation = ({ idCotacao, dispatch }) => {
	return (
		<button
			value='REPROVAR'
			onClick={(e) => {
				manageQuotation(idCotacao, e.target.value, dispatch);
			}}
		>
			Reprovar
		</button>
	);
};
