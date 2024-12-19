import { all } from 'redux-saga/effects';
import todoSaga from './saga';

export default function* rootSaga() {
    yield all([todoSaga()]);
}