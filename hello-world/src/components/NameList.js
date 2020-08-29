import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["Bruce","Diana","Clark"]
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
    //const personList = persons.map(person => <Person key={person.id} person={person}/>)
    const nameList = names.map((name,index) => <h2 key = {index}>{index}  {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
