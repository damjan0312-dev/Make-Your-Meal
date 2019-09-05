import { URL_ORDERS } from "./url";

export function* fetch_addons(URL) {
  try {
    const response = yield fetch(URL);
    const data = response.json();
    return yield data;
  } catch (e) {
    console.log(e);
  }
}
export function* addNewOrder(payload) {
  try {
    let response = yield fetch(URL_ORDERS, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload.payload)
    });

    return yield response.status === 201;
  } catch (e) {
    console.log(e);
  }
}
