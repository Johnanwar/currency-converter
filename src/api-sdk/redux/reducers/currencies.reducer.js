/* eslint-disable default-param-last */
const INITIAL_STATE = {
  allCurrency: [],
  transactions: [],
};

const currenciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_LATEST-CURRENCY':
      if (action.error) return state;
      return { ...state, allCurrency: Object.keys(action.data) };
    case 'GET_CONVERT':
      if (action.error) return state;
      return { ...state, transactions: [...state.transactions, action.data] };
    default:
      return state;
  }
};

export default currenciesReducer;
