/*
 * @Author       : wanglei
 * @Date         : 2022-04-02 10:21:52
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 13:51:32
 * @FilePath     : /shangguigu-redux/src/containers/Person/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react' 
import {nanoid} from 'nanoid'

export default class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    console.log(name, age)
    const personObj = {id: nanoid(), name, age}
  }
  render() {
    return (
      <div>
        <h3>当前是person组件</h3>
        <input ref={c => this.nameNode = c} type="text" />
        <input ref={c => this.ageNode = c} type="text" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          <li>名字1 - 年龄1</li>
          <li>名字1 - 年龄1</li>
          <li>名字1 - 年龄1</li>
        </ul>
      </div>
    )
  }
}
