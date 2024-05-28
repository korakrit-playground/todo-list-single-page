import React, { useState } from 'react'
import { Button, Input, List, Row, Col, Divider } from "antd";
import _ from "lodash"
import Todo from './Todo'
export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputField, setInputField] = useState("")

  const addTodoItem = () => {
    const newTodoList = [...todoList];
    newTodoList.push({
      id: _.uniqueId(),
      task: inputField
    })
    setTodoList(newTodoList)
    setInputField("")
  }

  const deleteTodoItem = (id) => {
    const newTodoList = [...todoList]
    const targetIndex = newTodoList.findIndex(todo => todo.id === id)
    newTodoList.splice(targetIndex, 1)
    setTodoList(newTodoList)
  }


  return (
    <Row justify={"center"}>
      <Col>
      Add New Todo List
      <Row justify={"center"}>
        <Col span={20}>
          <Input value={inputField} placeholder="Todo" onChange={(e) => setInputField(e.target.value)} />
        </Col>
        <Col>
          <Button style={{ width: '100%'}} onClick={addTodoItem}>Add</Button>
        </Col>
      </Row>
      <Divider />
      <Row justify={"center"}>
        <List header={<div>Todo List Page</div>}
        style={{ width: '450px'}}
        bordered
        dataSource={todoList}
        renderItem={todo => (
          <List.Item>
            <Todo deleteTodoItem={deleteTodoItem} setTodoList={setTodoList} todoList={todoList} todo={todo}/>
          </List.Item>
        )}
        />
      </Row>
      </Col>
    </Row>
  )
}
