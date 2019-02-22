import React from 'react'

const Item = ({ item }) => {

  const keys = Object.keys(item)
  const values = Object.values(item)
  const filteredVals = values.filter(val => typeof val === 'string')
  const filteredKey = keys.filter((key, i ) => i <= filteredVals.length)

    return (
      <tr>
    {filteredKey.map((itemkey, i) => <td key={i}>{item[itemkey]}</td>)}
    </tr>
    )
}

export default Item
