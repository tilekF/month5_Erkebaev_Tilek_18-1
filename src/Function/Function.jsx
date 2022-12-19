import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Function() {
    const counter = useSelector(state => state.count)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }


    return (
        <div className='Counter'>
            <h1>счетчик: {counter}</h1>
            <button className="btn-plus"
                    onClick={increment}>+
            </button>
            <button className="btn-minus"
                    onClick={decrement}>-
            </button>
            <h1>Считай</h1>
        </div>
    );
}

export default Function;