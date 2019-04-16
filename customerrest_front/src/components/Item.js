import React from 'react'
import { Link } from 'react-router-dom'
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';

const Item = ({ item, deleteCustomer, deleteTraining }) => {

  const keys = Object.keys(item)
  const values = Object.values(item)
  const filteredVals = values.filter(val => typeof val === 'string' || typeof val === 'number')
  const filteredKey = keys.filter((key, i ) => i < filteredVals.length)

    return (
      <tr>
    {filteredKey.map((itemkey, i) => <td className={`priority-${i+1}`} key={i}>{item[itemkey]}</td>)}
    {item.firstname ? <td className="hoverableIcon"><Link to={`/addtraining/${item.links[0].href.match(/\d+/)}`}><Add /></Link></td> : null }
    {item.firstname ? <td className="hoverableIcon"><Delete onClick={() => deleteCustomer(item)} /></td> : <td className="hoverableIcon"><Delete onClick={() => deleteTraining(item)} /></td> }
    </tr>
    )
}

export default Item
