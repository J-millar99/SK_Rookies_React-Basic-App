import { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyComponent extends Component {
  render() {
    const {name, age} = this.props;
    return (
      <div>
        <h2>클래스형 컴포넌트</h2>
        <h3>Hello! {name} / {age} </h3>
      </div>
    )
  }
} // class

MyComponent.defaultProps = {
    name: '리액트JS'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};