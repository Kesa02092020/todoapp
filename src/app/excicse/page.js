'use client';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const page = () =>{

    const [inputval,setInputval] = useState('');
    const [todo,setTodo] = useState([]);

    const debounce = (cb,d) => {
        let timer;
        return function (...args) {
            if(timer) clearTimeout (timer);
            timer = setTimeout(()=>{
                cb(...args);
            },d)
        };
    };
    
    const onChangeHandle = debounce((e) => {
        console.log(e.target.value);
    }, 2000);

    const onChangeHandledata = (e) =>{
        setInputval(e.target.value)
    }

    const onSubmit = () => {
        const todos ={
            id: uuidv4(),
            inputval:inputval
        }
        setTodo([...todo, todos]);
        console.log(todo);
        setInputval(''); 
      };
      const deletetodo = (erer) =>{
        const updatetodo = todo.filter((tdo,i)=>{
            return erer !== tdo.inputval;
        })
        setTodo(updatetodo);
        console.log(todo);
      }
    return (
        <div className="ms-5">
            <input onChange={onChangeHandle} /><br />
            <input value={inputval} onChange={onChangeHandledata} /><button onClick={onSubmit}>Submit</button>
           
            {todo.map((todost, i) => (
            <p key={i}>{todost.inputval}<button onClick={() =>{deletetodo(todost.inputval)}}>X</button></p>
            ))}
            
        </div>
    );
}
export default page;