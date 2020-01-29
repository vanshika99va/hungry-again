import { SEARCH_SUCCESS, SEARCH_FAILURE } from "./constants";

export const initialState = {
  searchResults: [],
  failure: false
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, searchResults: action.data ? action.data : [] };

    case SEARCH_FAILURE:
      return { ...state, failure: true };
    default:
      return state;
  }
};
export default searchReducer;
