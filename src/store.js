import { createStore, applyMiddleware, createAppropriateStore, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

// Connect our store to the reducers
export default store;
