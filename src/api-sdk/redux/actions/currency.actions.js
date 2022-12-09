/* eslint-disable import/prefer-default-export */
import Api from '../../services';

export const getlatestcurrencies = (params) => {
  return (dispatch) => {
    return Api.currency.getlatestcurrencies(params).then((response) => {
      dispatch({
        type: 'GET_LATEST-CURRENCY',
        data: response,
      });
      return response;
    });
  };
};
export const getconvertCurrencies = (params) => {
  return (dispatch) => {
    return Api.currency.getConvert(params).then((response) => {
      dispatch({
        type: 'GET_CONVERT',
        data: response,
      });
      return response;
    });
  };
};
