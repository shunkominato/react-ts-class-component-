import { Dispatch } from 'redux';
import * as actions from './actions';

const sleep = (waitTime: number) => new Promise(resolve => {
  setTimeout(resolve, waitTime)
});

export const init = () => actions.init();

// export const asyncInit = () => async (dispach: Dispatch) => {
//   await sleep(3000);
//   return dispach(actions.asyncInit());
// }

export const asyncInit = () => async (dispach: Dispatch) => {
  await sleep(3000);
  return dispach(actions.asyncInit());
}

export const addTodo = (todo: string) => (dispach: Dispatch) =>
  dispach(actions.add(todo));
