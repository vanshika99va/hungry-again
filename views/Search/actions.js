import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  GET_CATEGORIES,
  GET_CAT_FAILURE,
  GET_CAT_SUCCESS,
  HANDLE_CHECKED,
  HANDLE_QUERY_CHANGE,
  SET_CURR_OBJECT
} from "./constants";

export function searchFn(query, currPage) {
  // console.log("===>INSIDE SEARCH ACTION");
  // console.log({ query: query, currPage: currPage });
  return {
    type: SEARCH,
    query,
    currPage
  };
}
export function searchSuccess(data, totalResults) {
  return {
    type: SEARCH_SUCCESS,
    data,
    totalResults
  };
}
export function searchFailure() {
  return {
    type: SEARCH_FAILURE
  };
}
export function getCategories() {
  return {
    type: GET_CATEGORIES
  };
}
export function getCatSuccess(data) {
  return {
    type: GET_CAT_SUCCESS,
    data
  };
}
export function getCatFailure() {
  return {
    type: GET_CAT_FAILURE
  };
}
export function handleChecked(id) {
  console.log("======>INSIDE HANDLE CHECKED ACTION");
  return {
    type: HANDLE_CHECKED,
    id
  };
}

export function handleQueryChange(value) {
  return {
    type: HANDLE_QUERY_CHANGE,
    value
  };
}

export function setCurrObject(currObj) {
  return {
    type: SET_CURR_OBJECT,
    currObj
  };
}
