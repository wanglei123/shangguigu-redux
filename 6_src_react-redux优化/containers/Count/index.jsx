/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 21:11:53
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 09:23:51
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
} from '../../redux/count_action';

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
        <h1>当前求和为：{this.props.count} </h1>
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
// connect第一个调用的时候要传两个参数：两个参数必须是函数
export default connect(
  (state) => ({ count: state }),

  // mapDispatchToProps 精简写法：
  {
    [INCREMENT]: createIncrementAction,
    [DECREMENT]: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }

  // mapDispatchToProps的一般写法
  // (dispatch) => ({
  //   // 通知redux执行加法
  //   [INCREMENT]: (data) => dispatch(createIncrementAction(data)),
  //   // 通知redux执行减法
  //   [DECREMENT]: (data) => dispatch(createDecrementAction(data)),
  //   incrementAsync: (data, time) =>
  //     dispatch(createIncrementAsyncAction(data, time)),
  // })
)(Count);
