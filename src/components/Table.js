import React from 'react'
import List from './List'

const Table = ({ data, headers }) => {
  return (
  <div>
  <table>
  <thead><tr>{headers.map((header, i) => <th key={i}>{header}</th>)}</tr></thead>
  <List data={data} />
  </table>
  </div>
  )
}

export default Table
