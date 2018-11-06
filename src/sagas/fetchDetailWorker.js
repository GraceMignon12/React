import {call, put} from 'redux-saga/effects';
import fetchDetailAPI from '../api/FetchDetail';

export function* fetchDetailWorker() {
  const response = yield call(fetchDetailAPI);
  yield put({ type: 'FETCH_NEWS_DETAILS_SUCCESS', response });
}
