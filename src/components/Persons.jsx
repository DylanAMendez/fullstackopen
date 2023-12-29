
// TODO: muestra a todas las personas de la agenda telefónica y un componente que muestra los detalles de una sola persona.

const Persons = ({ persons }) =>
{
    return (
        <>
            <ul>
                {
                    persons.map(person => (
                        <li key={person.id}>
                            {person.name} {person.phone}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Persons