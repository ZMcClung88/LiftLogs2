import { LIFT_UPDATE, LIFT_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIFT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LIFT_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
