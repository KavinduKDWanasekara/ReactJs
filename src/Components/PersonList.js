import React from 'react'
import Person from './Person'


function PersonList() {

    const persons = [
        {
            id : 1,
            name: 'Kavindu',
            age: 22
        },
        {
            id : 2,
            name: 'Oshan',
            age: 21
        },
        {
            id : 1,
            name: 'Navindu',
            age: 20
        }
    ]

    const personList = persons.map(person => <Person person={person}></Person> )
    
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList
