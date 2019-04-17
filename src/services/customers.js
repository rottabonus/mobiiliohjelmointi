
const fetchAll = async () => {
  let response = await fetch('https://customerrest.herokuapp.com/api/customers');
  let data = await response.json()
  console.log(response.status)
  return data.content
}

const create = async (object) => {
  let response = await fetch('https://customerrest.herokuapp.com/api/customers',
  { method: "POST",
    mode: "cors",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(object) })
    console.log(response.status)
  return response.json()
}

const deleteCustomer = async (id) => {
  let response = await fetch(`https://customerrest.herokuapp.com/api/customers/${id}`,
  { method: "DELETE",
    mode: "cors",
    headers: {"Content-Type": "application/json"}
  })
  console.log(response.status)
  return response
}

export default { fetchAll, create, deleteCustomer }
