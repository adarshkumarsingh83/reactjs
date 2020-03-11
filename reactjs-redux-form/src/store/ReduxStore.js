import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
 form: reduxFormReducer, 
});

const store = createStore(rootReducer);

export default store;