import React from 'react'

function Person(person) {
    return (
        <div>
            <h2>My name is {person.name}. Im {person.age} years old.</h2>
        </div>
    )
}

export default Person
