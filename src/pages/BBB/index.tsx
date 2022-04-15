/* eslint-disable */
import React from 'react';
import { Formik } from 'formik';

type State = {
  todo: string;
};

class BBB extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todo: '',
    };
    this.onChangeTodo = this.onChangeTodo.bind(this);
  }

  onChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e)
    this.setState({
      todo: e.target.value,
    })
  }
  render() {
    return (
      <>
        todoリスト
        <Formik
          initialValues={{ todo: '' }}
          onSubmit={(values) => console.log(values)}
          render={(props) => (
            <input
              name='todo'
              value={this.state.todo}
              onChange={(e) => this.onChangeTodo(e)}
            />
          )}
        ></Formik>
      </>
    );
  }
}

export default BBB;
