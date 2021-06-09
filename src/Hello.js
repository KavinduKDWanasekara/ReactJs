import React from 'react'

const Hello = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Hello {props.name} is Kavindu</h1>
        </div>
    )
}

export const Hello2 = () => {
    return(
        React.createElement('div', null, React.createElement('h1', null, 'Hello Wanasekara'))
    )
}

export default Hello