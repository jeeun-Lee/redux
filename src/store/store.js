import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reduce from '../redux/reduce';
import rootSaga from '../redux/index';

const saga = createSagaMiddleware();

const store = createStore(
    reduce,
    applyMiddleware(saga)
);
saga.run(rootSaga);

export default store;