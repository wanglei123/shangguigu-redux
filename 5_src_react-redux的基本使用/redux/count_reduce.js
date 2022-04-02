/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 11:30:29
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-01 14:39:32
 * @FilePath     : /shangguigu-redux/src/redux/count_reduce.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/*
  1. 该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
  2. reducer会接到两个参数，分别为：1：之前的状态，动作对象
*/
import { INCREMENT, DECREMENT } from './constant';
const init = 0;

export default function countReducer(preState = init, action) {
  // if (preState === undefined){
  //   preState = 0
  // }
  // 从action中获取type和data
  const { type, data } = action;
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      // store.js一加载，初始化的时候 preState == undefined, 解决方法: 在开始时进行判断  或者 preState赋默认值 0
      return preState;
  }
}
