import React from 'react'
import Item from './Item'

const List = ({ data, deleteCustomer, deleteTraining }) => {
  return (
    <tbody>
    {data.map((item, i) =>
      <Item key={i} deleteCustomer={deleteCustomer} deleteTraining={deleteTraining} item={item}/>
    )}
    </tbody>
  )
}

export default List
