import { ADD_ORDER_SUCCESS } from "../Actions/actions";

const initialState = {
  order_pending: {}
};

const add_order_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        order_pending: payload
      };
    default:
      return state;
  }
};

export default add_order_reducer;
