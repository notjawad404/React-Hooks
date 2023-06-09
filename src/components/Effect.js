import React, { useState, useEffect} from 'react'


function Effect() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }

export default Effect;