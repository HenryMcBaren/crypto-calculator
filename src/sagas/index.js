import { call, put, takeEvery } from 'redux-saga/effects';

import CurrencyService from '../services';
import { currencySuccess, currencyFailed } from '../actions';
import { FETCH_CURRENCY_REQUEST } from '../constants';

const currencyService = new CurrencyService();

function* fetchCurrency() {
  try {
    const exchange = yield call(() => currencyService.getCurrency());
    yield put(currencySuccess(exchange));
  } catch (err) {
    yield put(currencyFailed(err.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_CURRENCY_REQUEST, fetchCurrency);
}

export default rootSaga;
