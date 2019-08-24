import * as types from '../constants';

function fetchReducer(state, action) {
  switch (action.type) {
    case types.FETCH_CURRENCY_REQUEST:
      return {
        loading: true,
        error: '',
        currencies: {},
      };
    case types.FETCH_CURRENCY_SUCCESS:
      return {
        loading: false,
        error: '',
        currencies: action.payload,
      };
    case types.FETCH_CURRENCY_FAILURE:
      return {
        loading: false,
        error: action.payload,
        currencies: {},
      };
    default:
      return state;
  }
}

export default fetchReducer;
