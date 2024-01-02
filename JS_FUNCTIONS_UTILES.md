
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

// -------

*** array.FILTER() , array.toLowerCase(), array.INCLUDES() ***
***Función para realizar una busqueda y mostrar paises que coincidan mientras buscas ***

    const filterCountriesToMinus = notes.filter(note => note.name.common.toLowerCase().includes(filterName))

    const filterCountries = filterName
    ? filterCountriesToMinus
    : [];

    let content;

    if (filteredCountries.length > 10) {

    content = <p>Too many matches, specify another filter</p>;

    } else if (filteredCountries.length === 1) {

    content = <Note note={filteredCountries[0]} />;

    } else {

    content = filteredCountries.map(note => (
      <li key={note.name.common}>
            {note.name.common}
      </li>
    ));
    }

-FRONTEND-:
    <ul>
        {content}
    </ul>

***Función para agregar un button al lado del nombre de un país y que se despliegue solo la vista de ese país***

    const [showCountry, setShowCountry] = useState(null);

    const handleFilterChange = (event) => 
    {
    setFilterName(event.target.value.toLowerCase());
    setShowCountry(null); ***Resetear el país mostrado cuando se cambia el filtro***
    };

     const toggleShowCountry = (country) => 
     {
        if (showCountry === country.name.common) {

            setShowCountry(null); // Ocultar si ya se está mostrando
      
        } else {

            setShowCountry(country.name.common); // Mostrar el país seleccionado
     }
         };

    
  if (filteredCountries.length > 10) {
    content = <p>Too many matches, specify another filter</p>;

  } else if (filteredCountries.length === 1) {

    content = <Note note={filteredCountries[0]} />;
    
  } else {
    content = filteredCountries.map(note => (
      <li key={note.name.common}>
        {note.name.common}
        <button onClick={() => toggleShowCountry(note)}>
          {showCountry === note.name.common ? 'Ocultar' : 'Mostrar'}
        </button>
        {showCountry === note.name.common && <Note note={note} />}
      </li>
    ));
  }