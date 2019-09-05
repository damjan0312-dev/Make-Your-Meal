import {
  REQUEST_ADDONS,
  receive_addons,
  receive_drinks
} from "../Actions/actions";
import { fetch_addons } from "../Api/service";

import { takeLatest, call, put, all } from "redux-saga/effects";

import { URL_ADDONS, URL_DRINKS } from "../Api/url";

export function* watchAddonsRequest() {
  yield takeLatest(REQUEST_ADDONS, workerForAddons);
}

function* workerForAddons() {
  try {
    const [addons_result, drinks_result] = yield all([
      call(fetch_addons, URL_ADDONS),
      call(fetch_addons, URL_DRINKS)
    ]);

    yield all([
      put(receive_addons(addons_result)),
      put(receive_drinks(drinks_result))
    ]);
  } catch (e) {
    console.log(e);
  }
}
