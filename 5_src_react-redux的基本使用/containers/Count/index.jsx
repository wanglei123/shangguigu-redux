/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 21:11:53
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-01 23:11:12
 * @FilePath     : /shangguigu-redux/src/containers/Count/index.jsx
 * @description  : react-redux 容器组件
 */

// 引入Count的UI组件
import CountUI from '../../components/Count';

// 引入connect 用于链接UI组件与redux
import { connect } from 'react-redux';

import { INCREMENT, DECREMENT } from '../../redux/constant';

// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action';

// a函数返回的对象中有key就作为传递给UI组件props的key,value就作为传递给UI组件的props的value -- 状态
function mapStateToProps(state) {
  return { count: state };
}

// a函数返回的对象中有key就作为传递给UI组件props的key,value就作为传递给UI组件的props的value -- 操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    // 通知redux执行加法
    [INCREMENT]: (data) =>  dispatch(createIncrementAction(data)),
    // 通知redux执行减法
    [DECREMENT]: (data) => dispatch(createDecrementAction(data)),
    incrementAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
  };
}

// 创建并暴露一个Count的容器组件
// connect第一个调用的时候要传两个参数：两个参数必须是函数
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
