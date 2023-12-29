import { useState } from 'react'
import Note from './components/Note'


const App = () =>
{
  const [notes, setNotes] = useState([])

  // * para almacenar la entrada enviada por el usuario y configurado como el atributo value del elemento input
  const [newNote, setNewNote] = useState('a new note...')

  // * realiza un seguimiento de las notas que deben mostrarse
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) =>
  {
    event.preventDefault()

    // ? creamos un nuevo objeto para la nota llamado noteObject que recibirá su contenido del estado del componente newNote
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  // *  habilitar la edición del elemento de entrada
  const handleNoteChange = (event) =>
  {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  // * filtrar las notas para mostrar solo las marcadas como importantes o todas
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  console.log(notes);

  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'Important' : 'All'}
        </button>
      </div>

      <ul>
        {
          notesToShow.map(
            note =>
              <Note key={note.id} note={note} />
          )
        }
      </ul>

      <form onSubmit={addNote}>

        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit' >save</button>

      </form>

    </div>
  )
}

export default App 