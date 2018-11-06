import {call, put} from 'redux-saga/effects';
import fetchNewsAPI from '../api/FetchNew';

export function* fetchNewsWorker() {
  const response = yield call(fetchNewsAPI);
  yield put({ type: 'FETCH_NEWS_SUCCESS', response });
}
