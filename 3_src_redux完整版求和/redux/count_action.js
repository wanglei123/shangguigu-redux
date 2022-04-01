/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 14:26:52
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-01 14:40:18
 * @FilePath     : /shangguigu-redux/src/redux/count_action.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 该文件专门为count组件生成action对象
import { INCREMENT, DECREMENT } from './constant';

export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });
