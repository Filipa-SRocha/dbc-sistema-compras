import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import purchaseReducer from './purchaseReducer';
import quotationReducer from './quotationReducer';

export default combineReducers({
	authReducer,
	userReducer,
	purchaseReducer,
	quotationReducer,
});
