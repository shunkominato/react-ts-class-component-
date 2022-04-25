import { applyMiddleware, createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
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
