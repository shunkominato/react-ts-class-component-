import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import * as reducers from './index';

import rootSaga from "../saga/index";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoList'],
};

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  ...reducers,
});

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
