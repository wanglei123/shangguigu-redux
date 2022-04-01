/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 11:30:19
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-01 11:41:39
 * @FilePath     : /shangguigu-redux/src/redux/store.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore 创建redux中最为核心的store
import { createStore } from "redux";

// 引入为count组件服务的reducer
import countReducer from './count_reduce'

// 暴露store
export default createStore(countReducer)



