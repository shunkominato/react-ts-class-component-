import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reduck/state';
import * as TodoListOperations from '../../reduck/todoList/operation';
import { TodoListState } from '../../reduck/todoList/reducers';

export type StateProps = {
  todoList: TodoListState;
};

export const mapStateToProps = (state: RootState): StateProps => ({
  todoList: state.todoList,
});

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, Action<any>>
) => ({
  init: () => {
    dispatch(TodoListOperations.init());
    dispatch(TodoListOperations.asuncInit());
  },

  handleSubmit: (formValue: string) => {
    dispatch(TodoListOperations.addTodo(formValue));
  },
});

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps);
