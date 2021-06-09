import React from 'react'

function Greet(props){
    console.log(props)
    return <h1>Hello {props.name} is Kavindu</h1>
}

export const Greet2 = (props) => {
    console.log(props)
    return(
        <h1>Hello {props.name} is Kavishka</h1>
    )
}

export default Greet