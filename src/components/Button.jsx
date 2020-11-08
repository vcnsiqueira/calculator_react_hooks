import React from 'react';
import './Button.css';

const Button = ({ label, operation, double, triple, onClick}) => {
    
    let classes = `button ${operation ? 'operation' : ''} ${double ? 'double' : ''} ${triple ? 'triple' : ''}`

    return(
        <button 
            className={classes}
            onClick={event => onClick && onClick(label)}
        >
            {label}
        </button>
    );
}

export default Button;