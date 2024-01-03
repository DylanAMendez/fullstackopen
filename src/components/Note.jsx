


const Note = ({ note, onDeleteContact }) =>
{
  const deleteContact = 'delete'

  return (
    <li>
      {note.content} {note.number} - <button onClick={onDeleteContact}> {deleteContact} </button>
    </li>
  )
}

export default Note