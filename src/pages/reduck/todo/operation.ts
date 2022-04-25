import { Dispatch } from "redux";
import * as actions from './actions';

export const init = () => {
  return (dispach: Dispatch) => dispach(actions.init());
};