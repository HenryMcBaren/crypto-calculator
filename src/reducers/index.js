import fetchReducer from './fetchReducer';
import selectReducer from './selectReducer';

const initialState = {
  fetching: {
    loading: false,
    error: '',
    currencies: {},
  },
  selectedCryptocurrency: [],
};

function reducer(state = initialState, action) {
  return {
    fetching: fetchReducer(state.fetching, action),
    selectedCryptocurrency: selectReducer(state.selectedCryptocurrency, action),
  };
}

export default reducer;
