import { fork } from "redux-saga/effects";

import collectionsSaga from "../../views/Collections/sagas";
import searchSaga from "../../views/Search/sagas";

const saga = function* saga() {
  yield fork(collectionsSaga);
  yield fork(searchSaga);
};

export default saga;
