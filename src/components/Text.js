import React from 'react'
import { useState } from 'react'

function Text(){
    const [text, setText] = useState("");

    function handleChange(event){
        setText(event.target.value)
    }

    return(
        <div>
            <input type="text" value={text} onChange={handleChange}/>
            <p>Message: {text}</p>
        </div>
    );
}

export default Text;
