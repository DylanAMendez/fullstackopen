import { useState, useEffect } from 'react';
import Note from './components/Note';
import agendaService from './services/agenda';

const App = () =>
{
  const [notes, setNotes] = useState([]);

  // * para almacenar la entrada enviada por el usuario y configurado como el atributo value del elemento input
  const [newNote, setNewNote] = useState('');
  const [newPhone, setNewPhone] = useState('');

  // * realiza un seguimiento de las notas que deben mostrarse
  const [showAll, setShowAll] = useState(true);

  useEffect(() =>
  {
    agendaService.getAll().then((initialAgenda) =>
    {
      setNotes(initialAgenda);
    });
  }, []);

  const addNote = (event) =>
  {
    event.preventDefault();

    // ? creamos un nuevo objeto para la nota llamado noteObject que recibirá su contenido del estado del componente newNote
    const noteObject = {
      content: newNote,
      number: newPhone,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    const nameAlreadyExists = notes.find((n) => n.content === newNote);

    if (nameAlreadyExists) {
      const confirmUpdate = window.confirm(
        `${newNote} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirmUpdate) {
        agendaService
          .update(nameAlreadyExists.id, {
            ...nameAlreadyExists,
            number: newPhone,
          })
          .then((returnedNote) =>
          {
            setNotes(
              notes.map((note) =>
                note.id !== nameAlreadyExists.id ? note : returnedNote
              )
            );
          })
          .catch((error) =>
          {
            console.log('error updating contact', error);
          });
      }
    }
    else {
      agendaService.create(noteObject).then((returnAgenda) =>
      {
        setNotes(notes.concat(returnAgenda));
        setNewNote('');
      });

      setNewPhone('');
    }
  };

  // const nameAlreadyExists = notes.map(n => n.content)
  // console.log('name already exists: ', nameAlreadyExists);

  // *  habilitar la edición del elemento de entrada
  const handleNoteChange = (event) =>
  {
    setNewNote(event.target.value);
  };

  const handlePhoneChange = (e) =>
  {
    setNewPhone(e.target.value);
  };

  // * filtrar las notas para mostrar solo las marcadas como importantes o todas
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  // * eliminar contacto seleccionado
  const deleteContact = (id) =>
  {
    if (!window.confirm('Are you sure?')) return;

    agendaService
      .deleteAContact(id)
      .then(() =>
      {
        setNotes(notes.filter((n) => n.id !== id));
      })
      .catch((error) =>
      {
        console.log(`Error deleting contact ${id}`, error);
      });
  };

  console.log(notes);

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
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDeleteContact={() => deleteContact(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <div>
          <label>name:</label>

          <input value={newNote} onChange={handleNoteChange} required />
        </div>

        <div>
          <label>number:</label>

          <input type='tel' value={newPhone} onChange={handlePhoneChange} />
        </div>

        <button type='submit'>save</button>
      </form>
    </div>
  );
};

export default App;
