import * as types from '../constants';

function currencyRequested() {
  return {
    type: types.FETCH_CURRENCY_REQUEST,
  };
}

function currencySuccess(data) {
  return {
    type: types.FETCH_CURRENCY_SUCCESS,
    payload: data,
  };
}

function currencyFailed(err) {
  return {
    type: types.FETCH_CURRENCY_FAILURE,
    payload: err,
  };
}
function setCryptocurrency(el) {
  return {
    type: types.SELECT_CURRENCY,
    payload: el,
  };
}

export {
  currencyRequested,
  currencySuccess,
  currencyFailed,
  setCryptocurrency,
};
