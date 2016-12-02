
import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  TEST: (state, action) => ({
    counter: state.counter + action.payload
  })
}, initialState);
