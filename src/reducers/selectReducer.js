import { SELECT_CURRENCY } from '../constants';

function selectReducer(state, action) {
  switch (action.type) {
    case SELECT_CURRENCY:
      return action.payload;
    default:
      return state;
  }
}

export default selectReducer;
