import React, { useState } from 'react';

function App() {
    let [name,setName] = useState("")
    console.log(name)

    function changeName(event){
        setName(event.target.value)
    }

    return (
        <div>
            <p>Enter your name :</p>
            <input type="text" onChange={changeName} />
            {
                name && <p>Hello {name}!</p>
            }
        </div>
    )
}

export default App