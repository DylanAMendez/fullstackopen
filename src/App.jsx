import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'


const App = () =>
{
  const [notes, setNotes] = useState([])

  // * para almacenar la entrada enviada por el usuario y configurado como el atributo value del elemento input
  const [newNote, setNewNote] = useState('a new note...')

  // * realiza un seguimiento de las notas que deben mostrarse
  const [showAll, setShowAll] = useState(true)


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

  useEffect(() =>
  {

    noteService
      .getAll()
      .then(initialNotes => 
      {
        setNotes(initialNotes)
      })


  }, [])


  const toggleImportanceOf = (id) =>
  {

    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => 
      {
        setNotes(notes.map(note => note.id !== id
          ? note
          : returnedNote))
      })
      .catch(error =>
      {
        alert(`the note '${note.content}' was already deleted froms server`)
        setNotes(notes.filter(n => n.id !== id))
      })

  }

  const addNote = (event) =>
  {
    event.preventDefault()

    // ? creamos un nuevo objeto para la nota llamado noteObject que recibirá su contenido del estado del componente newNote
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => 
      {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })

  }


  //? FRONTEND:

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
              <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
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