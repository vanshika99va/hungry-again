import {
  GET_COLLECTIONS,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILURE
} from "./constants";

export function getCollections(count) {
  return {
    type: GET_COLLECTIONS,
    count
  };
}
export function getCollectionsSuccess(data) {
  return {
    type: GET_COLLECTIONS_SUCCESS,
    data
  };
}
export function getCollectionsFailure() {
  return {
    type: GET_COLLECTIONS_FAILURE
  };
}
