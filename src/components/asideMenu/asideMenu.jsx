import { AsideMenuComponent } from './asideMenu.styled';
import { Link } from 'react-router-dom';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { MdAddShoppingCart, MdShoppingCart } from 'react-icons/md';
import { handleLogout } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AsideMenu = ({ nowActive, dispatch }) => {
	const navigate = useNavigate();
	const [active, setActive] = useState();

	useEffect(() => {
		nowActive ? setActive(nowActive) : setActive('/');
	}, []);

	return (
		<div>
			<AsideMenuComponent>
				<div>
					<Link to='/' className='logo'>
						DBC
					</Link>

					<ul>
						<li className={active === '/' ? 'navItem active' : 'navItem'}>
							<button
								onClick={() => {
									setActive('/');
									navigate('/');
								}}
							>
								<MdShoppingCart />
							</button>
						</li>

						<li
							className={
								active === '/solicitacao-compra' ? 'navItem active' : 'navItem'
							}
						>
							<button
								onClick={() => {
									setActive('/solicitacao-compra');
									navigate('/solicitacao-compra');
								}}
							>
								<MdAddShoppingCart />
							</button>
						</li>

						<li className={active === 'users' ? 'navItem active' : 'navItem'}>
							<button
								onClick={() => {
									setActive('users');
								}}
							>
								<HiUserGroup />
							</button>
						</li>
					</ul>
				</div>

				<button
					onClick={() => {
						handleLogout(dispatch);
					}}
				>
					<RiLogoutBoxFill className='logoutItem' />
				</button>
			</AsideMenuComponent>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(AsideMenu);
