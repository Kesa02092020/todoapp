"use client"
import React, { useEffect, useState } from 'react'

const colr = ["red", "green", "blue"];

const child = ({sendColor}) =>{

    const [newcolor,setNewcolor] = useState(["red", "green", "blue"]);
    const [getcolor,setGetcolor] = useState('');

    const onchange = (color) => { 
        sendColor(color);
    };

    const onchangevale = (e)=> {
        setGetcolor(e.target.value)
    }

    const addchange = (e) =>{
        
        if (getcolor !== "") {
            setNewcolor([...newcolor, getcolor]);
            setGetcolor("");
          } else {
            alert("Enter the Input");
          }
    }
  
    return (        
      <div className='px-5'>
        <input type='text' className='px-4' value={getcolor} onChange={onchangevale} />
        <button className='btn' onClick={(e) => addchange(e)}>ADD</button><br />
        <br />
        {newcolor.map((scolor, i) => (
          <button className='btn btn-secondary ms-3' key={i} onClick={() => onchange(scolor)}>{scolor}</button>
        ))}
      </div>
    );
} 
export default child;
