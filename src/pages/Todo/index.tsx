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
    console.log('init')
    console.log(this.props)
    console.log('init')
  }

  handleSubmit(formValue: {todo: string}) {
    try{
      this.props.handleSubmit(formValue.todo);
    } catch(e){
      console.log(e)
    }
    
    console.log('---')
    console.log(this.props)
    console.log('---')
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
          onSubmit={(values) => this.handleSubmit(values)}
        >
          {(formik) => (
              <form onSubmit={ formik.handleSubmit }>
                <input
                  name='todo'
                  value={formik.values.todo}
                  onChange={formik.handleChange}
                />
                <button type="submit">追加</button>
              </form>
          )}
        </Formik>
        {console.log(this.props)}
        {
          this.props.todoList.todoList.length > 0 && this.props.todoList?.todoList?.map((todo, index) => (
            // eslint-disable-next-line
            <li key={index}>
              {todo}
            </li>
          ))
        }
      </>
    );
  }
}

export default connect(Todo);
