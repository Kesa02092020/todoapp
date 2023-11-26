"use client";
import React, { useEffect, useState } from 'react'
import Child from './child'
const page = () => {

    const [todos, setTodos] = useState([]);

    const parentTodo = (todolist) => {
        setTodos(prev => todolist);
    }
    const editTodo = (id) => {

    }
    const deleteTodo = (id) => {
        
    }
    useEffect(()=>{
        if(todos.length === 0) return;
        localStorage.setItem("listoftodos",JSON.stringify(todos));
    },[todos])

    useEffect(()=>{
        const localstore = JSON.parse(localStorage.getItem("listoftodos"));
        setTodos(localstore);
    },[todos])

    return (
        <div>
            <Child childTodo={parentTodo} />
            <div className='row'>
                <div className='col-4 mx-auto p-4'>
                    <ul className='list-style-none'>
                        {todos.map((item,i) => {
                            return (
                                <li key={i+1} className='mb-3 d-flex align-items-center'>
                                    <span className='pe-3'><input type="checkbox" style={{width:"16px",height:"16px"}} checked={true} /></span>
                                    <p className='pe-3 m-0 w-75'>{item.todoName}</p> 
                                    <span className='pe-3'><a onClick={editTodo(i)}>Edit</a></span>  <span><a onClick={deleteTodo(i)}>Delete</a></span> 
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page
