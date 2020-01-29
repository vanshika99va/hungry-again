import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from "./constants";

export function searchFn(query) {
  return {
    type: SEARCH,
    query
  };
}
export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    data
  };
}
export function searchFailure() {
  return {
    type: SEARCH_FAILURE
  };
}
