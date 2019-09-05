import { watchAddonsRequest } from "./addons";
import { watchAddToCart } from "./addToCart";
import { watchRemoveFromCart } from "./removeFromCart";
import { watchAddOrder } from "./addOrder";

import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    fork(watchAddonsRequest),
    fork(watchAddToCart),
    fork(watchRemoveFromCart),
    fork(watchAddOrder)
  ]);
}
