import { Action } from 'redux';
import * as types from './types';

export const init = () => ({
    type: types.INIT,
  });

  export const add = (todo: string) => ({
    type: types.ADD,
    payload: todo,
  });

export interface TodoListInitAction extends Action {
  type: typeof types.INIT;
}

export interface TodoListAction extends Action {
  type: typeof types.ADD | typeof types.INIT;
  payload: string;
}