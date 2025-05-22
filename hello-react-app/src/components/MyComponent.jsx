import { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyComponent extends Component {
  render() {
    const {name, age} = this.props;
    return (
      <div>
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