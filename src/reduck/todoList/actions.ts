import { Action } from 'redux';
import * as types from './types';

export const init = () => ({
    type: types.INIT,
  });

export interface TodoListInitAction extends Action {
  type: typeof types.INIT;
  payload: string[];
}
