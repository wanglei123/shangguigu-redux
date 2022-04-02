/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 11:07:41
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-01 23:09:35
 * @FilePath     : /shangguigu-redux/src/components/Count/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

import {INCREMENT, DECREMENT} from '../../redux/constant'

export default class Count extends Component {
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
