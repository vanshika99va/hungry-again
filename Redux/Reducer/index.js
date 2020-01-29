import { combineReducers } from "redux";

import collectionsReducer from "../../views/Collections/reducer";
import searchReducer from "../../views/Search/reducer";

const rootReducer = combineReducers({
  collectionsReducer,
  searchReducer
});

export default rootReducer;
