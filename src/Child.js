import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const Child = () => {
    const myState = useSelector((state) => state.counter)
    return (
        <div>
          
            <h1>Counter in another  component {myState}</h1>
        </div>
    );
};

export default Child;