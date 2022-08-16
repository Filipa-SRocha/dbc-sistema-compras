import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { isAuth } from './store/actions/authActions';
import { Navigate } from 'react-router-dom';
import NewSalePage from './pages/compra/salePage/newSalePage';

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

	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route path='/solicitacao-compra' element={<NewSalePage />} />

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
			</Routes>
		</BrowserRouter>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Router);
