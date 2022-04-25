import { TodoListInitAction } from './actions';
import * as types from './types';

export const initialState = {
  todo: [] as string[],
};

export type TodoListState = typeof initialState;

export const todoListReducers = (
  state = initialState,
  action: TodoListInitAction
) => {
  switch (action.type) {
    case types.INIT:
      return initialState;
    default:
      return state;
  }
};
