import { Action } from 'redux';
import { TypedSchema } from 'yup/lib/util/types';
import * as types from './types'

export const init = () => {
  return {
    type: types.INIT,
  }
}

export interface TodoListInitAction extends Action {
  type: typeof types.INIT;
  payload: string[];
}