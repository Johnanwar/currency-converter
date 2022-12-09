import HttpHelpers from './helpers';

const currencyApiEndpoints = {
  getlatestcurrencies: (params) => {
    return HttpHelpers.defaultdAxios
      .get('exchangerates_data/symbols', { params })
      .then((response) => response.data.symbols);
  },
  getConvert: (params) => {
    return HttpHelpers.defaultdAxios
      .get('fixer/convert', { params })
      .then((response) => response.data);
  },
};
export default currencyApiEndpoints;
