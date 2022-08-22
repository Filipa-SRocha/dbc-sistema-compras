import { AsideMenuComponent } from './asideMenu.styled';
import { Link } from 'react-router-dom';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { MdAddShoppingCart, MdShoppingCart } from 'react-icons/md';
import { handleLogout } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { disableEditMode } from '../../store/actions/purchaseActions';

const AsideMenu = ({ nowActive, user, dispatch }) => {
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
						<li id='homepage' className={active === '/' ? 'navItem active' : 'navItem'}>
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
							id='solicitacao-compra'
							className={
								active === '/solicitacao-compra' ? 'navItem active' : 'navItem'
							}
						>
							<button
								onClick={() => {
									setActive('/solicitacao-compra');
									disableEditMode(dispatch);
									navigate('/solicitacao-compra');
								}}
							>
								<MdAddShoppingCart />
							</button>
						</li>

						{user.isAdmin ? 
						(<li className={active === '/admin' ? 'navItem active' : 'navItem'}>
						<button
							onClick={() => {
								setActive('/admin');
								navigate('/admin');
							}}
						>
							<HiUserGroup />
						</button>
					</li>)
					: null}
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
	user: state.userReducer.user,
});

export default connect(mapStateToProps)(AsideMenu);
