import React from 'react'
import Item from './Item'

const List = ({ data }) => {
  return (
    <tbody>
    {data.map((item, i) =>
      <Item key={i} item={item} />
    )}
    </tbody>
  )
}

export default List
