import { useState, useEffect } from 'react';
import Note from './components/Note'
import axios from 'axios'


const App = () =>
{

  const [notes, setNotes] = useState([])
  const [filterName, setFilterName] = useState('')
  const [showCountry, setShowCountry] = useState(null)

  const api_key = import.meta.env.VITE_REACT_APP

  console.log(api_key);

  const api_app = import.meta.env.VITE_REACT_APP_API_REST

  console.log(api_app);

  useEffect(() =>
  {

    console.log('effect')
    axios
      .get(api_app)
      .then(response => setNotes(response.data))


  }, [])





  console.log('render', notes.length, 'notes');

  console.log(notes);


  const handleFilterChange = (event) =>
  {
    const filter = event.target.value.toLowerCase()
    setFilterName(filter)

    setShowCountry(null)
  }

  const toggleShowCountry = (country) =>
  {
    if (showCountry === country.name.common) {
      setShowCountry(null)
    }
    else {
      setShowCountry(country.name.common)
    }
  }

  const filterCountriesToMinus = notes.filter(note => note.name.common.toLowerCase().includes(filterName))

  const filterCountries = filterName
    ? filterCountriesToMinus
    : [];

  let content;

  if (filterCountries.length > 10) {
    content = <p>Too many matches, specify another filter</p>
  }

  if (filterCountries.length === 1) {
    content = <Note note={filterCountries[0]} />
  }

  else {
    content = filterCountries.map(note => (
      <li key={note.name.common}>
        {note.name.common}

        <button onClick={() => toggleShowCountry(note)} >
          {showCountry === note.name.common ? 'Ocultar' : 'show'}
        </button>

        {showCountry === note.name.common && <Note note={note} />}

      </li>
    ))
  }

  return (
    <div>

      <div>
        find countries <input type="text" value={filterName} onChange={handleFilterChange} />
      </div>

      <ul>
        {content}
      </ul>

    </div>
  )
}

export default App