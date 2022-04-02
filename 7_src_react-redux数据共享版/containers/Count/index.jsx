/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 21:11:53
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 14:54:03
 * @FilePath     : /shangguigu-redux/src/containers/Count/index.jsx
 * @description  : react-redux 容器组件
 */
import React, { Component } from 'react';
// 引入connect 用于链接UI组件与redux
import { connect } from 'react-redux';

// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/actions/count';

import {INCREMENT, DECREMENT} from '../../redux/constant'
// 定义UI组件
class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props[INCREMENT](value*1)
  };

  decrement = () => {
    const { value } = this.selectNumber;
    this.props[DECREMENT](value*1)
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0){
      this.props[INCREMENT](value*1)
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value*1, 500)
  };

  render() {
    return (
      <div>
        <h2>当前是Count组件</h2>
        <h1>当前求和为：{this.props.count}, 下方组件总人数为{this.props.personLength } </h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步相加</button>
      </div>
    );
  }
}


// 创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state.count,personLength: state.person.length }),
  // mapDispatchToProps 精简写法：
  {
    [INCREMENT]: createIncrementAction,
    [DECREMENT]: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(Count);
