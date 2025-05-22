import { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <h3>Hello! {this.props.name}</h3>
      </div>
    )
  }
} // class

MyComponent.defaultProps = {
    name: '리액트JS'
};

MyComponent.propTypes = {
    name: PropTypes.string
};