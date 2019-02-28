
const fetchAll = async () => {
  let response = await fetch('http://customerrest.herokuapp.com/api/trainings');
  let data = await response.json()
  return data.content
}

const create = async (object) => {
  let response = await fetch('http://customerrest.herokuapp.com/api/trainings',
  { method: "POST",
    mode: "cors",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(object) })
  return response.json()
}

const deleteTraining = async (id) => {
  let response = await fetch(`http://customerrest.herokuapp.com/api/trainings/${id}`,
  { method: "DELETE",
    mode: "cors",
    headers: {"Content-Type": "application/json"}
  })
  return response
}

export default { fetchAll, create, deleteTraining }
