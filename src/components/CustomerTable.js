import React, { useState , useEffect} from 'react'
import List from './List'
import customerService from '../services/customers'

const CustomerTable = () => {

const [customers, setCustomers] = useState([])
const [filterString, setFilterString] = useState('')
const [customerHeaders, setCustomerheaders] = useState([])
const [filterKey, setFilterkey] = useState(['firstname'])
const customersToShow = customers.filter(a => a[filterKey].toLowerCase().includes(filterString.toLowerCase()))

  const fetchData = async () => {
    const customers = await customerService.fetchAll()
    setCustomers(customers)
    const values = Object.values(customers[0])
    const keys = Object.keys(customers[0])
    const filteredVals = values.filter(val => typeof val === 'string')
    const filteredKey = keys.filter((key, i ) => i < filteredVals.length)
    setCustomerheaders(filteredKey)
  }

   useEffect(() => {
    fetchData()
  }, [])

  const sortByKey = (key) => {
    setFilterkey(key)
    if(typeof customers[0][key] === 'string'){
      setCustomers([...customers].sort((a, b) => a[key].localeCompare(b[key])))
    } else {
      setCustomers([...customers].sort((a, b) => a[key] - b[key]))
    }
  }

  const deleteCustomer = async (item) => {
    const id = item.links[0].href.match(/\d+/)
    await customerService.deleteCustomer(id)
    fetchData()
  }

  const handleFilterChange = (e) => {
    setFilterString(e.target.value)
  }

  return (
  <div className="container">
  <p> Filter by <b>{filterKey}</b> </p>
  <input label="filter" value={filterString} onChange={handleFilterChange}/>
    <table>
      <thead><tr>{customerHeaders.map((header, i) => <th key={i} className={`priority-${i+1}`} onClick={() => sortByKey(header)}>{header.toUpperCase()}</th>)}<th>add</th><th>delete</th></tr></thead>
        <List data={customersToShow} deleteCustomer={deleteCustomer}/>
    </table>

  </div>
  )
}

export default CustomerTable
