"use client";
import React, { useState } from 'react'

const child = ({childTodo}) => {

    const [newtodo,setNewtodo] = useState('');
    const [todolist,setTodolist] = useState([]);


    const onChangeHandle = (e) =>{
        //console.log(e.target.value);
        setNewtodo(e.target.value)
    }
    const onsubmit = (e) =>{
        e.preventDefault();
        const assigntodo ={
            id: "",
            todoName:newtodo,
            completed:true
        }
        setTodolist(prev => [...prev, assigntodo]);

        alert([...todolist,assigntodo])
        childTodo([...todolist,assigntodo]);
        setNewtodo('');
        
    }
    console.log(todolist)
  return (
    <div className='row'>
      <div className='col-4 mx-auto p-5'>
        <input type='text' value={newtodo} className='from-control p-2 border rounded' onChange={onChangeHandle} />
        <button className='btn border ms-3 p-2' onClick={onsubmit}>Add</button></div>
    </div>
  )
}

export default child;

