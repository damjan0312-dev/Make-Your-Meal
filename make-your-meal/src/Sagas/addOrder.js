import {
  ADD_ORDER,
  add_order_success,
  remove_cart_success
} from "../Actions/actions";

import { put, takeEvery, all } from "redux-saga/effects";

import { addNewOrder } from "../Api/service";

export function* watchAddOrder() {
  yield takeEvery(ADD_ORDER, workerForAddOrder);
}

function* workerForAddOrder(payload) {
  try {
    const result = yield addNewOrder(payload);
    if (result === true) {
      yield all([put(add_order_success("ok")), put(remove_cart_success())]);
    }
  } catch (e) {
    console.log(e);
  }
}
