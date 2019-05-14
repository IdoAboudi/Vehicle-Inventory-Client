import React from 'react';
import { Button } from 'react-bootstrap';

const Btn = (props) => {
    return (
        <Button
            type="submit"
            onClick={props.action}
            disabled={!props.disabled}
        >
            {props.title}
        </Button>
    )
}

export default Btn;
