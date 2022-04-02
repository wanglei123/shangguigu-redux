/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 10:37:26
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-01 21:37:09
 * @FilePath     : /shangguigu-redux/src/App.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import store from './redux/store'
import Count from './containers/Count';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store={store} />
      </div>
    );
  }
}
