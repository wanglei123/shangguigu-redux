/*
 * @Author       : wanglei
 * @Date         : 2022-04-02 13:40:29
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 14:46:47
 * @FilePath     : /shangguigu-redux/src/redux/reducers/person.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ADD_PERSON } from '../constant';

// 初始化人的列表
const initState = [];
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
