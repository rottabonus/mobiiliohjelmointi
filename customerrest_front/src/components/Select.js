import React, { useState , useEffect} from 'react'
import customerService from '../services/customers'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const SelectCustomer = () => {

  const [customers, setCustomers] = useState([])
  const [selected, setSelected] = useState("")

    const fetchData = async () => {
      const customers = await customerService.fetchAll()
      setCustomers(customers)
    }

    const handleChange = (e) => {
      setSelected(e.target.value)
    }

     useEffect(() => {
      fetchData()
    }, [])


  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <div>
    <FormControl required>
          <InputLabel>Customer</InputLabel>
          <Select
            native
            value={selected}
            onChange={handleChange}
          >
          <option value="" />
            {customers.map((elem, i) => <option key={i} value={elem.links[0].href.match(/\d+/)}>{elem.firstname} {elem.lastname}</option>)}
          </Select>
        </FormControl>
        </div>
      <div>
      {selected === "" ? null : <Link style={{ textDecoration: 'none' }} to={`/addtraining/${selected}`}><Button color="primary"> ADD TRAINING </Button></Link>}
      </div>
    </div>
  )
}

export default SelectCustomer
