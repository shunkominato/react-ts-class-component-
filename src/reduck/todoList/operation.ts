import { Dispatch } from 'redux';
import * as actions from './actions';

export const init = () => (dispach: Dispatch) => dispach(actions.init());
export const asuncInit = () => (dispach: Dispatch) =>
  dispach(actions.asyncInit());

export const addTodo = (todo: string) => (dispach: Dispatch) =>
  dispach(actions.add(todo));
