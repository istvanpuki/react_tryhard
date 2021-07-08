import React, { useState } from 'react';

function handleClick () {
    console.log("clicked");
}

function Button () {
    const [buttonText, setbuttonText] = useState("Click me!");
    return (
            <button onClick={handleClick}>{buttonText}</button>
    );
}

export default Button;