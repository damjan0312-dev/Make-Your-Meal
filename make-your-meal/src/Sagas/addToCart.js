import { ADD_TO_CART, add_to_cart_success } from "../Actions/actions";

import { put, takeEvery } from "redux-saga/effects";

export function* watchAddToCart() {
  yield takeEvery(ADD_TO_CART, workerForAddToCart);
}

function* workerForAddToCart(payload) {
  try {
    yield put(add_to_cart_success(payload.payload));
  } catch (e) {
    console.log(e);
  }
}
