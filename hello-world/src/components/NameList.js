import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            name    : "Bruce",
            id      :    1,
            skill   :   "Vue"
        } ,
        {
            name    : "Clark",
            id      :    2,
            skill   :   "Angular"
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
