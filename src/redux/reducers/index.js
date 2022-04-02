/*
 * @Author       : wanglei
 * @Date         : 2022-04-02 15:51:43
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 15:55:21
 * @FilePath     : /shangguigu-redux/src/redux/reducers/index.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 该文件用于汇总所有的reducer为一个总的reducer

import {combineReducers} from 'redux'

// 引入为count组件服务的reducer
import count from './count'

// 引入person组件服务的reducer
import person from './person'

// 汇总reducer
export default combineReducers({
  count,
  person
})

