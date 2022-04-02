/*
 * @Author       : wanglei
 * @Date         : 2022-04-02 13:37:40
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 13:39:23
 * @FilePath     : /shangguigu-redux/src/redux/actions/person.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {ADD_PERSON} from '../constant'

// 创建增加一个人的action
export const createAddPersonAction = (personObj) => ({type: ADD_PERSON, data: personObj})