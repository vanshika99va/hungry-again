import { call, put, takeLatest, select } from "redux-saga/effects";

import { SEARCH, GET_CATEGORIES, HANDLE_CHECKED } from "./constants";

import {
  searchSuccess,
  searchFailure,
  getCatSuccess,
  getCatFailure
} from "./actions";

//------------------------------------------------------------------
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
const categoriesResults = state => state.searchReducer.categoriesResults;

export function* searchFn(action) {
  console.log("======> INSIDE SEARCH SAGA");

  const query = action.query;
  const categories = yield select(categoriesResults);

  const category = categories.length > 0 ? yield select(categoriesResults) : [];

  console.log("IN SAGA : categoriesResults: ", category);

  const catUrl = category
    .filter(item => item.isChecked == true)
    .reduce(
      (str, item) =>
        str.concat(
          item.name
            .toString()
            .toLowerCase()
            .concat("%20")
        ),
      ""
    )
    .replace(/ |-|&/g, "%20");

  console.log({ catURL: catUrl.toString() });
  const start = yield select(startPage);
  const count = yield select(pageCount);

  const url = `https://developers.zomato.com/api/v2.1/search?q=${query}&start=${start}&count=${count}&category=${catUrl}`;
  console.log({ url: url });
  try {
    const results = yield call(getSearchResults, url);
    const totalResults = results.results_found;
    const res = results.restaurants;
    console.log("totalResults: ", totalResults);
    yield put(searchSuccess(res, totalResults));
  } catch (err) {
    yield put(searchFailure(err));
  }
}

//----------------------------------------------------------------------------

const getCatfn = async url => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "user-key": "b0e1dda05a007e1ef5030e1d34ce41e4" }
  });
  const data = await response.json();

  return data;
};

export function* getCategories(action) {
  // console.log("===>INSIDE GET CAT SAGA");
  const url = "https://developers.zomato.com/api/v2.1/categories";
  try {
    const results = yield call(getCatfn, url);
    const cat = results.categories;
    // console.log("cat: ", cat);
    yield put(getCatSuccess(cat));
  } catch (err) {
    yield put(getCatFailure(err));
  }
}

// const query = state => state.searchReducer.query;
// const currPage = state => state.searchReducer.currPage;

// export function* handleChecked() {
//   // console.log("===>HANDLE CHECKED SAGA");
//   const query = yield select(query);
//   const currPage = yield select(currPage);
//   yield put(searchFn(query, currPage));
// }

export default function* searchSaga() {
  yield takeLatest(SEARCH, searchFn);
  yield takeLatest(GET_CATEGORIES, getCategories);
  // yield takeLatest(HANDLE_CHECKED, handleChecked);
}
