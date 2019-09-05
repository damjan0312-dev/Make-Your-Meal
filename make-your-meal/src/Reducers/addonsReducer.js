import { RECEIVE_ADDONS, RECEIVE_DRINKS } from "../Actions/actions";

const initialState = {
  addons: [],
  drinks: []
};

const addons_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_ADDONS:
      return {
        ...state,
        addons: payload
      };
    case RECEIVE_DRINKS:
      return {
        ...state,
        drinks: payload
      };
    default:
      return state;
  }
};
export default addons_reducer;
