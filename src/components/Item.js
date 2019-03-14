import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item, deleteCustomer, deleteTraining }) => {

  const keys = Object.keys(item)
  const values = Object.values(item)
  const filteredVals = values.filter(val => typeof val === 'string' || typeof val === 'number')
  const filteredKey = keys.filter((key, i ) => i < filteredVals.length)

    return (
      <tr>
    {filteredKey.map((itemkey, i) => <td className={`priority-${i+1}`} key={i}>{item[itemkey]}</td>)}
    {item.firstname ? <td><Link to={`/addtraining/${item.links[0].href.match(/\d+/)}`}><button>addtraining</button></Link></td> : null }
    {item.firstname ? <td><button onClick={() => deleteCustomer(item)}>deleteCustomer</button></td> : <td><button onClick={() => deleteTraining(item)}>deleteTraining</button></td> }
    </tr>
    )
}

export default Item
