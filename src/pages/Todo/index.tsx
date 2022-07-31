import React from 'react';
import { Formik } from 'formik';
import connect, { DispatchProps, StateProps } from './container';

type Props = StateProps & DispatchProps;
type State = {
  todo: string;
};

class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todo: '',
    };
    this.onChangeTodo = this.onChangeTodo.bind(this);
  }

  async componentDidMount () {
    console.log('start')
     const ss = await this.props.init();
     console.log(ss);
    console.log('end')
  }

  handleSubmit(formValue: { todo: string }) {
    try {
      console.log(this.props.todoList.todoList);
      // eslint-disable-next-line no-debugger
      this.props.handleSubmit(formValue.todo);
      console.log(this.props.todoList.todoList);
    } catch (e) {
      console.log(e);
    }
  }

  onChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      todo: e.target.value,
    });
    console.log(this.state.todo);
  }

  render() {
    return (
      <>
        todoリスト
        <Formik
          initialValues={{ todo: this.state.todo }}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <input
                name='todo'
                value={formik.values.todo}
                onChange={formik.handleChange}
              />
              <button type='submit'>追加</button>
            </form>
          )}
        </Formik>
        {this.props.todoList.todoList.length > 0 &&
          this.props.todoList?.todoList?.map((todo, index) => (
            // eslint-disable-next-line
            <li key={index}>{todo}</li>
          ))}
      </>
    );
  }
}

export default connect(Todo);
