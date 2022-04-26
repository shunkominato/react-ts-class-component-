import { Dispatch } from 'redux';
import * as actions from './actions';

export const init = () => (dispach: Dispatch) => dispach(actions.init());
