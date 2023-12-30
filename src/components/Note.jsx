

const Note = ({ note }) =>
{

  console.log(note.languages);

  const languages = Object.values(note.languages)


  return (
    <>
      <h3> {note.name.common} </h3>
      <p> capital: {note.capital} </p>
      <p> population: {note.population} </p>
      <h4>languages</h4>
      <>
        <li>
          {
            languages.map((language, index) => (
              <p key={index}>
                <>{language}</>
              </p>
            ))
          }
        </li>
      </>

      <img src={note.flags.svg} alt={note.name.common} width={200} />

    </>
  )
};

export default Note;
