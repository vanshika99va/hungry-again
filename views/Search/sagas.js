import { call, put, takeLatest, select } from "redux-saga/effects";

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

const startPage = state => state.searchReducer.startPage;
const pageCount = state => state.searchReducer.pageCount;

export function* searchFn(action) {
  console.log("Inside saga ===>");

  const start = yield select(startPage);
  console.log("start:", { start });

  const count = yield select(pageCount);

  const url = `https://developers.zomato.com/api/v2.1/search?q=${action.query}&start=${start}&count=${count}`;

  try {
    const results = yield call(getSearchResults, url);
    const totalResults = results.results_found;
    const res = results.restaurants;
    console.log("totalResults: ", totalResults);
    // console.log("data in saga: ", res);
    yield put(searchSuccess(res, totalResults));
  } catch (err) {
    console.log({ err });
    yield put(searchFailure(err));
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH, searchFn);
}
