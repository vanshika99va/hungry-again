import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  GET_CAT_SUCCESS,
  GET_CAT_FAILURE,
  HANDLE_CHECKED,
  HANDLE_QUERY_CHANGE,
  SET_CURR_OBJECT
} from "./constants";

export const initialState = {
  searchResults: [],
  searchFailure: false,
  isFetching: false,
  startPage: 0,
  pageCount: 10,
  totalPages: 0,
  currPage: 1,
  categoriesResults: [],
  selectedCategories: [],
  catFailure: false,
  query: "",
  currObject: { featured_image: "", name: "", timings: "" }
};
const searchReducer = (state = initialState, action) => {
  // console.log("====> INSIDE REDUCER");
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        isFetching: true,
        currPage: action.currPage,
        startPage: state.pageCount * (action.currPage - 1)
      };

    case SEARCH_SUCCESS:
      console.log({ actionData: action.data });
      return {
        ...state,
        isFetching: false,
        totalPages: Math.ceil(action.totalResults / state.pageCount),
        searchResults: action.data ? action.data : []
      };

    case SEARCH_FAILURE:
      return { ...state, searchFailure: true };

    case GET_CAT_SUCCESS:
      const changedData = action.data
        ? action.data.map(({ categories }) => ({
            ...categories,
            isChecked: false
          }))
        : [];
      // console.log("==> changed data: ", changedData);
      return {
        ...state,
        categoriesResults: changedData
      };
    case GET_CAT_FAILURE:
      return {
        ...state,
        catFailure: true
      };

    case HANDLE_CHECKED:
      const res = state.categoriesResults.map(val => {
        // console.log({ val: val });
        // console.log({ actionID: action.id });
        if (val.id === action.id) {
          return {
            ...val,
            isChecked: !val.isChecked
          };
        } else {
          return val;
        }
      });
      // console.log("INSIDE HANDLES CHECKED", res);

      return {
        ...state,
        categoriesResults: res
      };

    case HANDLE_QUERY_CHANGE:
      return {
        ...state,
        query: action.value
      };

    case SET_CURR_OBJECT:
      // console.log("=====xx====");
      // console.log({
      //   action: action,
      //   currObj: action.currObject
      //   // name: action.currObject.name
      // });
      return {
        ...state,
        currObject: {
          ...state.currObject,
          featured_image: action.currObj.featured_image,
          name: action.currObj.name,
          timings: action.currObj.timings
        }
      };

    default:
      return state;
  }
};
export default searchReducer;
