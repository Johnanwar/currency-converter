import { combineReducers } from 'redux';
import currenciesReducer from './currencies.reducer';

const rootReducer = combineReducers({
  allCurrency: currenciesReducer,
});

export default rootReducer;
