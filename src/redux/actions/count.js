/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 14:26:52
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 10:17:22
 * @FilePath     : /shangguigu-redux/src/redux/action/count.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 该文件专门为count组件生成action对象
import { INCREMENT, DECREMENT } from '../constant';

// 异步action指：action的值是一个Object的一般对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 异步action指：action的值是一个函数, 异步action最终都会调用一个同步action
// 异步action不是必须要用的
export const createIncrementAsyncAction = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      // 通知redux +data
      dispatch(createIncrementAction(data))
    },time)
  }
}
