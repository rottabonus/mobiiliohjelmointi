import React from 'react'

const Item = ({ item }) => {

  const keys = Object.keys(item)

  if(keys[0] === 'firstname') {

    return (
      <tr>
    <td>{item.firstname}</td>
    <td>{item.lastname}</td>
    <td>{item.email}</td>
    </tr>
    )

  } else {

    return (
      <tr>
      <td>{item.date}</td>
      <td>{item.duration}</td>
      <td>{item.activity}</td>
      </tr>
    )
  }
}

export default Item
