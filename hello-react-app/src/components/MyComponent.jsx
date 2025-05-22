import { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyComponent extends Component {
  // 상태변수를 포함하는 state 객체 선언
  state = {
    value: 0,
    
  }
  // Event Handler 함수
  handleDecrement = () => (
    this.setState({
      value: this.state.value - 1
    }));
  render() {
    const {name, age} = this.props;
    const { value } = this.state;
    const {handleDecrement} = this;
    return (
      <div>
        <h2>클래스형 컴포넌트</h2>
        <h3>Hello! {name} / {age} </h3>
        <p>상태변수 value={value} </p>
        <button onClick={() => (
          this.setState({ value: value + 1}))}>
          증가</button>
        <button onClick={handleDecrement}>감소</button>
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