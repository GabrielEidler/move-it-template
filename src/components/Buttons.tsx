import { useState } from 'react'
interface ButtonProps {
    color: string;
    children:string;
}

//props has type: button
export function Button(props:ButtonProps) {
    // const  and function
    const [counter, setCounter] = useState(1)

    const increment = () => {
        setCounter(counter + 1)
    }


    return(
        <button 
            onClick={() => {increment() } }
            type="button" 
            style={
                { 
                    backgroundColor: props.color, 
                    color: 'white', 
                    padding: '100px', 
                    borderRadius: '150px', 
                    border: 'none', 
                    margin:  '50px'
                }
                } > 
                {props.children} <strong >{counter}</strong>
                </button>
    )
}