import currencyApiEndpoints from './currency.api';
import * as helpers from './helpers';

const Api = {
  ...helpers,
  currency: currencyApiEndpoints,
};

export default Api;
