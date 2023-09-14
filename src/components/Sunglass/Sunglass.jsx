import React from 'react';
import './sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiple, divideIntoplace as divd } from '../../Utils/calculate'

const Sunglass = () => {
    const first = 55;
    const second = 99;
    const sum = add(first, second);
    const mult = multiple(first, second)
    const div = divd(first, second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;