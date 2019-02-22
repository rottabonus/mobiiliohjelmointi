import React from 'react'

const Item = ({ item }) => {

  const keys = Object.keys(item)

    return (
      <tr>
    <td>{item[keys[0]]}</td>
    <td>{item[keys[1]]}</td>
    <td>{item[keys[2]]}</td>
    </tr>
    )
}

export default Item
