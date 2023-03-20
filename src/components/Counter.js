import React, { useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);

    function handleclick(){
        setCount(count+1)
    }

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleclick}>Click</button>
        </div>
    );
}

export default Counter;