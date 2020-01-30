import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  GET_CATEGORIES,
  GET_CAT_SUCCESS,
  GET_CAT_FAILURE
} from "./constants";

export const initialState = {
  searchResults: [],
  failure: false,
  isFetching: false,
  startPage: 0,
  pageCount: 10,
  totalPages: 0,
  currPage: 1,
  categoriesResults: []
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      console.log("Inside reducer=====>");
      console.log({
        crrr: action.currPage,
        start: state.startPage,
        count: state.pageCount
      });
      return {
        ...state,
        isFetching: true,
        currPage: action.currPage,
        startPage: state.pageCount * (action.currPage - 1)
      };
    case SEARCH_SUCCESS:
      console.log("----> searchSuccess reducer");
      console.log({ totalPages: state.totalPages });
      console.log("after-- ", Math.ceil(action.totalResults / state.pageCount));

      return {
        ...state,
        isFetching: false,
        totalPages: Math.ceil(action.totalResults / state.pageCount),
        searchResults: action.data ? action.data : []
      };

    case SEARCH_FAILURE:
      return { ...state, failure: true };
    default:
      return state;

    case GET_CATEGORIES:
  }
};
export default searchReducer;
