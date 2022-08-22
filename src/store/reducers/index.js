import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import purchaseReducer from './purchaseReducer';
import adminReducer from './adminReducer';
import quotationReducer from './quotationReducer';
import managerReducer from './managerReducer';
import financesReducer from './financesReducer';
import buyerReducer from './buyerReducer';

export default combineReducers({
	authReducer,
	userReducer,
	purchaseReducer,
	adminReducer,
	quotationReducer,
	managerReducer,
	financesReducer,
	buyerReducer,
});
