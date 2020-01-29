import { call, put, takeLatest } from "redux-saga/effects";

import { GET_COLLECTIONS } from "./constants";

import { getCollectionsSuccess, getCollectionsFailure } from "./actions";

const getData = async url => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "user-key": "b0e1dda05a007e1ef5030e1d34ce41e4"
    }
  });
  const data = await response.json();
  return data;
};

export function* getCollections(action) {
  const url = `https://developers.zomato.com/api/v2.1/collections?city_id=280&lat=40.742051&lon=-74.004821&count=${action.count}`;
  try {
    const results = yield call(getData, url);
    const data = results.collections;
    yield put(getCollectionsSuccess(data));
  } catch (err) {
    yield put(getCollectionsFailure(err));
  }
}
export default function* collectionsSaga() {
  yield takeLatest(GET_COLLECTIONS, getCollections);
}
