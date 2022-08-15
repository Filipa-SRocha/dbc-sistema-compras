import { AsideMenuComponent } from './asideMenu.styled';
import { Link } from 'react-router-dom';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { BsFillCartFill } from 'react-icons/bs';
import { handleLogout } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const AsideMenu = ({ dispatch }) => {
	return (
		<div>
			<AsideMenuComponent>
				<div>
					<Link to='/' className='logo'>
						DBC
					</Link>
					<BsFillCartFill className='navItem' />
					<HiUserGroup className='navItem' />
				</div>
				<button
					onClick={() => {
						handleLogout(dispatch);
					}}
				>
					<RiLogoutBoxRFill className='navItem' />
				</button>
			</AsideMenuComponent>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(AsideMenu);
