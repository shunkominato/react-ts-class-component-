import { TodoListAction } from './actions';
import * as types from './types';

export const initialState = {
  todoList: [] as string[],
};

export type TodoListState = typeof initialState;

export default (
  state = initialState,
  action: TodoListAction
) => {
  switch (action.type) {
    case types.INIT:
      console.log('@@')
      return {
        todoList: []
      };
    case types.ADD:
      console.log(state);
      return {
        todoList: [...state.todoList, action.payload]
      }
    default:
      return state;
  }
};
