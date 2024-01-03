import axios from 'axios';

const URL = 'http://localhost:3001/agenda';

const getAll = () => {
  const request = axios.get(URL);

  return request.then((res) => res.data);
};

const create = (newObject) => {
  const request = axios.post(URL, newObject);

  return request.then((res) => res.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${URL}/${id}`, newObject);

  return request.then((res) => res.data);
};

const deleteAContact = (id) => {
  const request = axios.delete(`${URL}/${id}`);

  return request.then((res) => res.data);
};

export default { getAll, create, update, deleteAContact };
