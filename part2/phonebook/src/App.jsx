import { useState, useEffect } from 'react'
import personService from "./services/persons"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState("")
    const [notification, setNotification] = useState("")
    const [notificationType, setNotificationType] = useState("")

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const notifiy = (message, type) => {
        setNotification(message)
        setNotificationType(type)
        setTimeout(() => {
            setNotification("")
            setNotificationType("")
        }, 5000)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const nameAlreadyExists = persons.find(person => person.name === newName)
        if (nameAlreadyExists) {
            if (confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
                const updatedPerson = {...nameAlreadyExists, number: newNumber}
                personService
                    .updatePerson(updatedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
                    })
                    .catch(error => {
                        notifiy(
                            `Information of ${updatedPerson.name} has already been removed from the server`,
                            "error"
                        )
                        setPersons(persons.filter(p => p.id !== updatedPerson.id))
                    })
            }
        } else {
            const newPerson = { 
                name: newName,
                number: newNumber,
            }
            personService
                .createPerson(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    notifiy(`Added ${returnedPerson.name}`, "success")
                })
        }
        setNewName("")
        setNewNumber("")
    }

    const deletePerson = (person) => {
        if (confirm(`Delete ${person.name}?`)) {
            personService
                .deletePerson(person.id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== person.id))
                })
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const personsToShow = filter
        ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        : persons
 
    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notification} messageType={notificationType} />
            <Filter filter={filter} onChange={handleFilterChange} />
            <h2>add new</h2>
            <PersonForm
                nameValue={newName} 
                onNameChange={handleNameChange} 
                numberValue={newNumber} 
                onNumberChange={handleNumberChange} 
                onSubmit={addPerson} 
            />
            <h2>Numbers</h2>
            <Persons persons={personsToShow} deletePerson={deletePerson} />
        </div>
    )
}

export default App
