import { AsideMenuComponent } from './asideMenu.styled';
import { Link } from 'react-router-dom';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { MdAddShoppingCart, MdShoppingCart } from 'react-icons/md';
import { handleLogout } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AsideMenu = ({ dispatch }) => {
	const navigate = useNavigate();
	return (
		<div>
			<AsideMenuComponent>
				<div>
					<Link to='/' className='logo'>
						DBC
					</Link>
					<MdShoppingCart className='navItem' onClick={() => {navigate('/')}} />
					<MdAddShoppingCart
						className='navItem'
						onClick={() => {
							navigate('/solicitacao-compra');
						}}
					/>
					<HiUserGroup className='navItem' />
				</div>
				<button
					onClick={() => {
						handleLogout(dispatch);
					}}
				>
					<RiLogoutBoxFill className='navItem' />
				</button>
			</AsideMenuComponent>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(AsideMenu);
