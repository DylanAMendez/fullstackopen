
*** array.INCLUDES() ***
// * dado que persons es un [] de objetos, hay que transformar este [] a un [] de nombres (strings) para poder usar includes()

    const name = persons.map(person => person.name)

    if (name.includes(newName)) {

      alert(`${newName} is already added to phone book`)

      return
    }
    if (newName.length < 2) { return }

// -------


*** array.SOME() ***

//  verifica si algún elemento del arreglo cumple con la condición especificada

    const name = persons.some(person => person.name === newName)

    if (name) {

      alert(`${newName} is already added to phone book`)

      return
    }

// -------

*** array.FIND() ***

// devuelve el primer elemento del array que satisface la condición proporcionada. Si devuelve undefined.

    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {

    alert(`${newName} is already added to phonebook`);

    return;

     }

*** array.FILTER() ***
***Función para filtrar personas basada en el nombre ***

    const filteredPersons = filterName
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filterName.toLowerCase()))
    : persons;

-FRONTEND-: 
    <ul>
        {filteredPersons.map(person => (
          <li key={person.id}>
            {person.name} {person.phone}
          </li>
        ))}
    </ul>