import React, { useState } from 'react'
import { Button, Row, Col, Input } from "antd";

export default function Todo(props) {

    const [updateTodoList, setUpdateTodoList] = useState("")
    const [isEdit, setIsEdit] = useState(false)

    const updateTodoItem = async (id) => {
        const newTodoList = [...props.todoList]
        const targetIndex = newTodoList.findIndex(todo => todo.id === id)
        newTodoList[targetIndex] = { ...newTodoList[targetIndex], task: updateTodoList };
        props.setTodoList(newTodoList)
        setIsEdit(false)
    }

    const toggleEdit = () => {
        setUpdateTodoList(props.todo.task)
        setIsEdit(true)
    }

    let contents = (
        <Row style={{ width: '100%' }}>
            <Col span={20}>
                <Input value={updateTodoList} onChange={(e) => setUpdateTodoList(e.target.value)} />
            </Col>
            <Col span={4}>
                <Button type="primary" onClick={() => updateTodoItem(props.todo.id)}>Update</Button>
            </Col>
        </Row>
    )

    if(!isEdit) {
        contents = (
            <Row style={{ width: '100%' }}>
                <Col span={16}>
                    <Row justify="start">
                        {props.todo.task}
                    </Row>
                </Col>
                <Col span={4}>
                    <Button style={{backgroundColor: 'orange'}} onClick={() => toggleEdit()}>Edit</Button>
                </Col>
                <Col span={4}>
                    <Button type="primary" danger onClick={() => props.deleteTodoItem(props.todo.id)}>Delete</Button>
                </Col>
            </Row>
            )
    }


    return (
        <div style={{ width: '100%' }}>
            {contents}
        </div>
    )
}
