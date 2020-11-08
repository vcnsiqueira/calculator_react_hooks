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

    const handleOperation = op => {
        if (current === 0) {
            setCurrent(1);
            setOperation(op);
            setClearDisplay(true);
        } else {
            const equality = op === '=';
            const currentOperation = operation;

            const newValues = [...values];
            if (currentOperation === '+') {
                newValues[0] = values[0] + values[1]
            } else if (currentOperation === '-') {
                newValues[0] = values[0] - values[1]
            } else if (currentOperation === '*') {
                newValues[0] = values[0] * values[1]
            } else if (currentOperation === '/') {
                newValues[0] = values[0] / values[1]
            }
            //newValues[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            newValues[1] = 0;

            setDisplayValue(newValues[0]);
            setOperation(equality ? null : op);
            setCurrent(equality ? 0 : 1);
            setClearDisplay(!equality);
            setValues(newValues);
        }
    };

    const addDigit = n => {
        if (n === '.' && displayValue.includes('.')) {
            return
        }

        const clear = displayValue === '0' || clearDisplay
        const currentValue = clear ? '' : displayValue
        const showValue = currentValue + n

        setDisplayValue(showValue);
        setClearDisplay(false);

        if (n !== '.') {
            const i = current;
            const newValue = parseFloat(showValue)
            const newValues = [...values]
            newValues[i] = newValue
            setValues(newValues);
            console.log(newValues);
        }
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