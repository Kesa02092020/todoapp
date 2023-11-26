"use client";
import React, { useState } from 'react'
import Child from './child'

const page = () => {

    const [changeclr, setChangeclr] = useState("");

    const childcolor = (color) => {
      setChangeclr(color);
      //console.log(color);
    };
    return (
      <div className="App px-5 py-4">
        <label style={{ color: changeclr }}>Ramahandran</label>
        <p>{changeclr}</p>
        <Child sendColor={childcolor} />
      </div>
    );
}

export default page;
