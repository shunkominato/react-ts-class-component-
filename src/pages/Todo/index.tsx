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

  componentDidMount() {
    this.props.init();
  }

  onChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
    this.setState({
      todo: e.target.value,
    });
  }

  render() {
    return (
      <>
        todoリスト
        <Formik
          initialValues={{ todo: this.state.todo }}
          onSubmit={(values) => console.log(values)}
          render={(props) => (
            <input
              name='todo'
              value={props.values.todo}
              onChange={(e) => this.onChangeTodo(e)}
            />
          )}
        >
          <button type='submit'>追加</button>
        </Formik>
      </>
    );
  }
}

export default connect(Todo);
