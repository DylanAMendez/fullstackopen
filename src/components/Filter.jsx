
// TODO: filtro de búsqueda

const Filter = ({ value, onChange }) =>
{

  return (
    <div>
      <p>
        filter shown with <input type="text" value={value} onChange={onChange} />
      </p>
    </div>
  )
}

export default Filter