import React, { useState , useEffect} from 'react'
import List from './List'
import customerService from '../services/customers'

const CustomerTable = () => {

const [customers, setCustomers] = useState([])
const [customerHeaders, setCustomerheaders] = useState([])

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
    if(typeof customers[0][key] === 'string'){
      setCustomers([...customers].sort((a, b) => a[key].localeCompare(b[key])))
    } else {
      setCustomers([...customers].sort((a, b) => a[key] - b[key]))
    }
  }

  return (
  <div>
    <table>
      <thead><tr>{customerHeaders.map((header, i) => <th key={i} onClick={() => sortByKey(header)}>{header.toUpperCase()}</th>)}</tr></thead>
        <List data={customers} />
    </table>
  </div>
  )
}

export default CustomerTable
