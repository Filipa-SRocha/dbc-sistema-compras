import { AsideMenuComponent } from './asideMenu.styled';
import { Link } from 'react-router-dom';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { BsFillCartFill } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { handleLogout } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { disableEditMode } from '../../store/actions/purchaseActions';

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
								<BsFillCartFill />
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
									disableEditMode(dispatch);
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
