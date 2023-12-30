import { useState, useEffect } from 'react';
import Note from './components/Note'
import axios from 'axios'


const App = () =>
{

  const [notes, setNotes] = useState([])
  const [filterName, setFilterName] = useState('')

  useEffect(() =>
  {

    console.log('effect')
    axios
      .get('http://localhost:3001/all')
      .then(response => setNotes(response.data))


  }, [])


  console.log('render', notes.length, 'notes');

  console.log(notes);


  const handleFilterChange = (event) =>
  {
    const filter = event.target.value.toLowerCase()
    setFilterName(filter)
  }

  const filterCountries = filterName
    ? notes.filter(note =>
      note.name.common.toLowerCase().includes(filterName)
    )
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