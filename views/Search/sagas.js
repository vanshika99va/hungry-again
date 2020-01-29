import { call, put, takeLatest } from "redux-saga/effects";

import { SEARCH } from "./constants";

import { searchSuccess, searchFailure } from "./actions";

const getSearchResults = async url => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "user-key": "b0e1dda05a007e1ef5030e1d34ce41e4"
    }
  });
  const data = await response.json();
  return data;
};

export function* searchFn(action) {
  const url = `https://developers.zomato.com/api/v2.1/search?q=${action.query}`;
  try {
    const results = yield call(getSearchResults, url);
    const res = results.restaurants;
    console.log("data in saga: ", res);
    yield put(searchSuccess(res));
  } catch (err) {
    yield put(searchFailure(err));
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH, searchFn);
}
