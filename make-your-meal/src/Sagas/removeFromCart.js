import { REMOVE_FROM_CART, remove_from_cart_success } from "../Actions/actions";

import { put, takeEvery } from "redux-saga/effects";

export function* watchRemoveFromCart() {
  yield takeEvery(REMOVE_FROM_CART, workerForRemoveFromCart);
}

function* workerForRemoveFromCart(payload) {
  try {
    yield put(remove_from_cart_success(payload.payload));
  } catch (e) {
    console.log(e);
  }
}
