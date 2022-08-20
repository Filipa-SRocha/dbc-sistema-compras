import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import purchaseReducer from './purchaseReducer';
import adminReducer from './adminReducer';

export default combineReducers({
	authReducer,
	userReducer,
	purchaseReducer,
	adminReducer,
});
