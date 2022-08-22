import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { isAuth } from './store/actions/authActions';
import { Navigate } from 'react-router-dom';
import NewPurchasePage from './pages/purchase/purchasePage/newPurchasePage';
import User from './pages/user/User';
import EditPurchasePage from './pages/purchase/editPurchasePage';
import PurchaseDetails from './pages/purchase/purchaseDetails';
import Admin from './pages/admin/Admin';
import 'nprogress/nprogress.css';
import UserDetailByAdmin from './pages/admin/userDetailByAdmin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerPage from './pages/manager/managerPage';
import BuyerDashboard from './pages/buyer/buyerDashboard';
import NewQuotation from './pages/quotation/newQuotation';
import FinancesPage from './pages/finances/financesPage';
import SignUpAdmin from './pages/admin/SignUpAdmin';
import AdminDashboard from './pages/admin/adminDashboard';
import NotFound from './pages/notFound/notFound';

const Router = ({ auth, dispatch }) => {
	useEffect(() => {
		isAuth(dispatch);
	}, []);

	const ProtectedRoute = ({ children }) => {
		if (auth.isLoading) {
			return <h1>Loading</h1>;
		}

		if (!auth.isLogged) {
			return <Navigate to='/login' />;
		}
		return children;
	};

	const LogRoute = ({ children }) => {
		if (auth.isLoading) {
			return <h1>Loading</h1>;
		}
		if (auth.isLogged) {
			return <Navigate to='/' />;
		}
		return children;
	};

	const Redirect = ({ children }) => {
		if (auth.cargos.length > 1) {
			return <Navigate to='/admin/dashboard' />;
		}

		switch (auth.cargos[0].name) {
			case 'ROLE_COMPRADOR':
				return <Navigate to='/comprador' />;
			case 'ROLE_GESTOR':
				return <Navigate to='/gestor' />;
			case 'ROLE_FINANCEIRO':
				return <Navigate to='/financeiro' />;
			case 'ROLE_COLABORADOR':
				return <Navigate to='/colaborador' />;
			default:
				return children;
		}
	};

	return (
		<BrowserRouter>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{/* Same as */}
			<ToastContainer />

			<GlobalStyle />
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Redirect>
								<Dashboard />
							</Redirect>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/colaborador'
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/gestor'
					element={
						<ProtectedRoute>
							<ManagerPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/comprador'
					element={
						<ProtectedRoute>
							<BuyerDashboard />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/financeiro'
					element={
						<ProtectedRoute>
							<FinancesPage />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/comprador/nova-cotacao'
					element={
						<ProtectedRoute>
							<NewQuotation />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/user'
					element={
						<ProtectedRoute>
							<User />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/user/change-info'
					element={
						<ProtectedRoute>
							<User changeType='info' />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/user/change-password'
					element={
						<ProtectedRoute>
							<User changeType='password' />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/admin'
					element={
						<ProtectedRoute>
							<Admin />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/admin/dashboard'
					element={
						<ProtectedRoute>
							<AdminDashboard />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/user-detail'
					element={
						<ProtectedRoute>
							<UserDetailByAdmin />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/new-user'
					element={
						<ProtectedRoute>
							<SignUpAdmin />
						</ProtectedRoute>
					}
				/>

				<Route path='/solicitacao-compra' element={<NewPurchasePage />} />
				<Route
					path='/editar-compra/:idCompra'
					element={
						<ProtectedRoute>
							<EditPurchasePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/details-page'
					element={
						<ProtectedRoute>
							<PurchaseDetails />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/login'
					element={
						<LogRoute>
							<Login />
						</LogRoute>
					}
				/>
				<Route
					path='/new-user'
					element={
						<LogRoute>
							<SignUp />
						</LogRoute>
					}
				/>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Router);
