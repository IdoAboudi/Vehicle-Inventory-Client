import React from 'react';

import './Input.css';

const Input = (props) => {
    return (  
  <div className="wrapper">
    <label className="input-name" htmlFor={props.name}>{props.title}</label>
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      className={props.styleInput}
    />
  </div>
)
}

export default Input;