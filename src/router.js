import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';

const Router = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/login' element={<Login />} />
				<Route path='/new-user' element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
