import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from "./constants";

export function searchFn(query, currPage) {
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
