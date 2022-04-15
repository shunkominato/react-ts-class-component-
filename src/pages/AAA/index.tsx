import React from 'react';
import { Link } from 'react-router-dom';

class AAA extends React.Component {
  render() {
    return (
      <>
        saga
        <li>
          <Link to='/BBB'>todoリスト</Link>
        </li>
      </>
    );
  }
}

export default AAA;
