import React, { useState , useEffect} from 'react'
import List from './List'
import customerService from '../services/customers'

const CustomerTable = () => {

  const [customers, setCustomers] = useState([])
  const [customerHeaders] = useState(['Firstname', 'Lastname', 'Email'])

  const fetchData = async () => {
    const customers = await customerService.fetchAll()
    setCustomers(customers)
  }

   useEffect(() => {
    fetchData()
  }, [])


  return (
  <div>
  <table>
  <thead><tr>{customerHeaders.map((header, i) => <th key={i}>{header}</th>)}</tr></thead>
  <List data={customers} />
  </table>
  </div>
  )
}

export default CustomerTable
