import {call, put} from 'redux-saga/effects';
import fetchDetailAPI from '../api/FetchDetail';

export function* fetchDetailWorker(action) {
  const response = yield call(fetchDetailAPI,action.id);
  yield put({ type: 'FETCH_NEWS_DETAILS_SUCCESS', response });
}
