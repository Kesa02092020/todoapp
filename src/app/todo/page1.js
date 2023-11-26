"use client";
import React, { useReducer, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";

const todoReducer = (todos,action) => {
    switch(action.type){
        case "ADD_TODO" :
            return [ 
                ...todos,
                { id: uuidv4(), todotext: action.payload, completed: false }
            ];

        default:
        break;
    }
}

const page = () => {

    
    const [todos,dispatch] = useReducer(todoReducer,[]);
    const [todotext, setTodotext] = useState('');
    

    const onchangeHandle = (e) => {
        setTodotext(e.target.value)
    }
    const onsubmitHandle = (e) => {
        e.preventDefault();
        addTodo();
       
    }
    const addTodo = () => {

        dispatch({ type: "ADD_TODO", payload: todotext });
        setTodotext("");
    }
    const editTodo = (item) =>{
        setTodotext(item.todotext)
    }
    useEffect (()=>{
        console.log(todos);
    },[todos])
    return (
        <Container className='items-page w-50 mx-auto'>
            <Row>
                <Col sm={12}>
                    <div className='d-flex mb-4' >
                        <input className='form-control' type="text" value={todotext} placeholder="Enter Your Todo" onChange={onchangeHandle} />
                        <button className="ms-3 btn-primary" variant="primary" onClick={onsubmitHandle}>Primary</button>
                    </div>
                </Col>
                <Col sm={12}>
                    <ListGroup as="ul">
                        {todos.map((todo) => {
                            return (
                                <ListGroup.Item key={todo.id} as="li" className="d-flex align-items-center px-0 justify-content-between border-0 border-bottom border-radius-0 w-100">
                                    <div className='d-flex align-items-center'>
                                        <span className='pe-4'><Form.Check aria-label="option 1" /></span>
                                        <p className='m-0'>{todo.todotext}</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <span className='ps-3' onClick={editTodo(todo)}>Edit</span>
                                        <span className='ps-3'>Delete</span>
                                    </div>
                                </ListGroup.Item>
                            )
                        }
                        )}

                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default page;
