import React, { useState , useEffect} from 'react'
import List from './List'
import trainingService from '../services/trainings'

const TrainingTable = () => {

  const [trainings, setTrainings] = useState([])
  const [filterString, setFilterString] = useState('i.e. "zumba"')
  const trainingHeaders = ['Date', 'Duration', 'Activity']
  const trainingsToShow = trainings.filter(a => a.activity.toLowerCase().includes(filterString.toLowerCase()))

  const fetchData = async () => {
    const trainings = await trainingService.fetchAll()
    setTrainings(trainings)
  }

  const handleFilterChange = (e) => {
    setFilterString(e.target.value)
  }

   useEffect(() => {
    fetchData()
  }, [])


  return (
  <div>
  <table>
  <thead><tr>{trainingHeaders.map((header, i) => <th key={i}>{header}</th>)}</tr></thead>
  <List data={trainingsToShow} />
  </table>
  <p> Filter activities </p>
  <input label="filter" value={filterString} onChange={handleFilterChange}/>
  </div>
  )
}

export default TrainingTable
