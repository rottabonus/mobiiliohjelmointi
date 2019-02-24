
const fetchAll = async () => {
  let response = await fetch('http://customerrest.herokuapp.com/api/customers');
  let data = await response.json()
  return data.content
}
export default { fetchAll }
