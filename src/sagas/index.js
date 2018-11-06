import { takeLatest } from 'redux-saga/effects';
import { fetchNewsWorker } from './fetchNewsWorker';
import { fetchDetailWorker } from './fetchDetailWorker';

export default function* rootSagas() {
  // console.log('sagas >> ', action);
  yield takeLatest('FETCH_NEWS', fetchNewsWorker);
  yield takeLatest('FETCH_NEWS_DETAILS',fetchDetailWorker);

}
