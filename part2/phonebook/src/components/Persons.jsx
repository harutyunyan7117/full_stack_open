import Person from "./Person"

const Persons = ({ persons, deletePerson }) => {
    return (
        <>
            {persons.map(person => {
                return <Person 
                    key={person.id} 
                    person={person} 
                    onDelete={() => deletePerson(person)}
                />
            })}
        </>
    )
}

export default Persons
