import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';
import { todoListReducers } from './todoList/reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoList'],
};

export const rootReducer = combineReducers({
  todoListReducers,
});

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk)
);

export const persistor = persistStore(store)
