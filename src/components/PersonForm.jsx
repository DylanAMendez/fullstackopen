// TODO:  formulario para agregar nuevas personas a la agenda telefónica

// * se encargará de manejar el estado y la lógica para agregar nuevas personas.

const PersonForm = ({ onSubmit, handleNameChange, newName, newPhone, handlePhoneChange }) =>
{
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                        placeholder='a new person...'
                    />
                </div>
                <div>
                    phone:
                    <input
                        type="tel"
                        value={newPhone}
                        onChange={handlePhoneChange}
                        placeholder='11-44-1234567' />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>

        </>
    )
}

export default PersonForm