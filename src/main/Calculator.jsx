import React, { useState } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const Calculator = () => {

    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0,0]);
    const [current, setCurrent] = useState(0);

    const clearMemory = () => {
        setDisplayValue('0');
        setClearDisplay(false);
        setOperation(null);
        setValues([0,0]);
        setCurrent(0);
    };

    const handleOperation = operation => {
        console.log(operation);
    };

    const addDigit = n => {
        if (n === '.' && displayValue.includes('.')) {
            return
        }

        const clear = displayValue === '0' || clearDisplay
        console.log('clear: ' + clear);
        const currentValue = clear ? '' : displayValue
        console.log('currentValue: ' + currentValue);
        const showValue = currentValue + n

        setDisplayValue(showValue);
        setClearDisplay(false);
    };

    return(
        <div className="calculator">
            <Display value={displayValue}/>
            <Button label="AC" triple operation onClick={clearMemory}/>
            <Button label="/" operation onClick={handleOperation}/>
            <Button label="7" onClick={addDigit}/>
            <Button label="8" onClick={addDigit}/>
            <Button label="9" onClick={addDigit}/>
            <Button label="*" operation onClick={handleOperation}/>
            <Button label="4" onClick={addDigit}/>
            <Button label="5" onClick={addDigit}/>
            <Button label="6" onClick={addDigit}/>
            <Button label="-" operation onClick={handleOperation}/>
            <Button label="1" onClick={addDigit}/>
            <Button label="2" onClick={addDigit}/>
            <Button label="3" onClick={addDigit}/>
            <Button label="+" operation onClick={handleOperation}/>
            <Button label="0" double onClick={addDigit}/>
            <Button label="." onClick={addDigit}/>
            <Button label="=" operation onClick={handleOperation}/>
        </div>
    );
};


export default Calculator;