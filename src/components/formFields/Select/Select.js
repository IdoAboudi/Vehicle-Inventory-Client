import React from 'react';

import './Select.css';
const Select = (props) => {
    return (
        <div className="wrapper">
            <label className="select-name" htmlFor={props.name}> {props.title} </label>
            <select
            className="advancedSelect"
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.options.map(option => {
                    return (
                        <option
                            key={option}
                            value={option}
                            label={option}>{option}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default Select;