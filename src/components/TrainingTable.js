import React, { useState , useEffect} from 'react'
import List from './List'
import trainingService from '../services/trainings'

const TrainingTable = () => {

  const [trainings, setTrainings] = useState([])
  const [trainingHeaders] = useState(['Date', 'Duration', 'Activity'])


  const fetchData = async () => {
    const trainings = await trainingService.fetchAll()
    setTrainings(trainings)
  }

   useEffect(() => {
    fetchData()
  }, [])

  return (
  <div>
  <table>
  <thead><tr>{trainingHeaders.map((header, i) => <th key={i}>{header}</th>)}</tr></thead>
  <List data={trainings} />
  </table>
  </div>
  )
}

export default TrainingTable
