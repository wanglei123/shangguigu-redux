/*
 * @Author       : wanglei
 * @Date         : 2022-04-02 10:21:52
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-04-02 14:37:53
 * @FilePath     : /shangguigu-redux/src/containers/Person/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { createAddPersonAction } from '../../redux/actions/person';

class PersonUI extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.add_person(personObj);
  };
  render() {
    return (
      <div>
        <h3>当前是person组件</h3>
        <input ref={(c) => (this.nameNode = c)} type="text" />
        <input ref={(c) => (this.ageNode = c)} type="text" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personList.map((person) => {
            return (
              <li key={person.id}>
                {person.name} - {person.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ personList: state.person }),
  // 没有操作方法，要写 {}
  {
    add_person: createAddPersonAction,
  }
)(PersonUI);
