import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddeware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddeware];

const store = createStore(rootReducer, middlewares);

sagaMiddeware.run(rootSaga);

export default store;
