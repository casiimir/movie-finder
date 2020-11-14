import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className="scroll shadow-5">
            {props.children}
        </div>
    )
};

export default Scroll;