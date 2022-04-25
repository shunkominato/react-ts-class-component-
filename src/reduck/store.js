import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage'
import { todoListReducers } from './todoList/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'todoList',
  ],
};

export const rootReducer = combineReducers({
  todoListReducers,
});

export const store = createStore(
  persistReducer(persistConfig, rootReducer)
)
