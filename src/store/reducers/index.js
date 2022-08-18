import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import purchaseReducer from './purchaseReducer';

export default combineReducers({
	authReducer,
	userReducer,
	purchaseReducer,
});
