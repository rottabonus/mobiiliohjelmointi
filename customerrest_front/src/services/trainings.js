
const fetchAll = async () => {
  let response = await fetch('https://customerrest.herokuapp.com/api/trainings');
  let data = await response.json()
  console.log(response.status)
  return data.content
}

const create = async (object) => {
  let response = await fetch('https://customerrest.herokuapp.com/api/trainings',
  { method: "POST",
    mode: "cors",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(object) })
    console.log(response.status)
  return response.json()
}

const deleteTraining = async (id) => {
  let response = await fetch(`https://customerrest.herokuapp.com/api/trainings/${id}`,
  { method: "DELETE",
    mode: "cors",
    headers: {"Content-Type": "application/json"}
  })
  console.log(response.status)
  return response.status
}

export default { fetchAll, create, deleteTraining }
