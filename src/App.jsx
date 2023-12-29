import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () =>
{
  // * [] de PERSONS
  const [persons, setPersons] = useState([
    { name: 'Arthur Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abm', phone: '12-43-234345', id: 3 },
    { name: 'Mary dick', phone: '39-23-6423122', id: 4 }
  ])

  // * destinado a controlar el elemento de entrada del formulario.
  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const [filterName, setFilterName] = useState('')

  const addPersons = (event) =>
  {
    event.preventDefault()

    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }

    // TODO: Validaciones
    if (newName == '') {

      alert(`name cannot by empty`)

      return
    }

    // * dado que persons es un [] de objetos, hay que transformar este [] a un [] de nombres (strings) para poder usar includes()
    const name = persons.some(person => person.name === newName)

    if (name) {

      alert(`${newName} is already added to phone book`)

      return
    }

    const phone = persons.some(person => person.phone === newPhone)

    if (phone) {
      alert(`${newPhone} is already added to phone book`)

      return
    }

    if (newName.length < 2) { return }

    if (newPhone.length < 4) {
      return
    }

    setNewName(newName)
    setNewPhone(newPhone)
    setPersons(prevPerson => prevPerson.concat(personObject))

    setNewName('')
  }

  // *[Y]
  const handleNameChange = (event) =>
  {
    const name = event.target.value
    setNewName(name)
  }
  const handlePhoneChange = (event) =>
  {
    const phone = event.target.value
    setNewPhone(phone)
  }

  const handleFilterNameChange = (event) =>
  {

    const filter = event.target.value
    setFilterName(filter)
  }


  // * nombres Filtrados a MINÚSCULAS
  const nameFilterToMinus = filterName.toLowerCase()

  const filterPersonsName =
    filterName
      ? persons.filter(p =>
        p.name.toLowerCase().includes(nameFilterToMinus))

      : persons;


  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <Filter value={filterName} onChange={handleFilterNameChange} />
      </div>

      <PersonForm
        onSubmit={addPersons}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>

      <Persons persons={filterPersonsName} />

      <div>
        <p>debug: {filterName}</p>
      </div>

    </div>
  )
}

export default App