import { GET_COLLECTIONS_FAILURE, GET_COLLECTIONS_SUCCESS } from "./constants";

export const initialState = {
  collections: [],
  failure: false
};

const collectionsReducer = (state = initialState, action) => {
  // console.log(action.data);
  switch (action.type) {
    case GET_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.data ? action.data : [] };
    //action.objectFromAPI(payload of success).objectField(s)
    case GET_COLLECTIONS_FAILURE:
      return { ...state, failure: true };
    default:
      return state;
  }
};
export default collectionsReducer;
