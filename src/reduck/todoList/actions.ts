import { Action } from 'redux';
import * as types from './types';

export const init = () => ({
  type: types.INIT,
});

// export const asyncInit = () => ({
//   type: types.ASYNC_INIT,
// });

export const asyncInit = {
  type: types.ASYNC_INIT,
};

export const add = (todo: string) => ({
  type: types.ADD,
  payload: todo,
});

export interface TodoListInitAction extends Action {
  type: typeof types.INIT;
}

export interface TodoListAsyncInitAction extends Action {
  type: typeof types.INIT;
}

export interface TodoListAction extends Action {
  type: typeof types.INIT | typeof types.ASYNC_INIT | typeof types.ADD;
  payload: string;
}
