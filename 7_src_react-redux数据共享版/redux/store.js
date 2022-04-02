/*
 * @Author       : wanglei
 * @Date         : 2022-04-01 11:30:19
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 14:23:40
 * @FilePath     : /shangguigu-redux/src/redux/store.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore 创建redux中最为核心的store,applyMiddleware执行中间件thunk
import { createStore, applyMiddleware, combineReducers } from "redux";

// 引入为count组件服务的reducer
import countReducer from './reducers/count'

// 引入person组件服务的reducer
import personReducer from './reducers/person'

// 引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";

// 汇总reducer
const allReducer = combineReducers({
  count: countReducer,
  person: personReducer
})

// 暴露store
export default createStore(allReducer,applyMiddleware(thunk))



