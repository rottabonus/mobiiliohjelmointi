import React, { useState , useEffect} from 'react'
import List from './List'
import trainingService from '../services/trainings'

const TrainingTable = () => {

  const [trainings, setTrainings] = useState([])
  const [filterString, setFilterString] = useState('')
  const [trainingHeaders, setTrainingheaders] = useState([])
  const [filterKey, setFilterkey] = useState(['activity'])
  const trainingsToShow = trainings.filter(a => a[filterKey].toString().toLowerCase().includes(filterString.toLowerCase()))

  const fetchData = async () => {
    const trainings = await trainingService.fetchAll()
    setTrainings(trainings)
    const values = Object.values(trainings[0])
    const keys = Object.keys(trainings[0])
    const filteredVals = values.filter(val => typeof val === 'string')
    const filteredKey = keys.filter((key, i ) => i <= filteredVals.length)
    setTrainingheaders(filteredKey)
  }

  const handleFilterChange = (e) => {
    setFilterString(e.target.value)
  }

   useEffect(() => {
    fetchData()
  }, [])

  const sortByKey = (key) => {
    setFilterkey(key)
    if(typeof trainings[0][key] === 'string'){
      setTrainings([...trainings].sort((a, b) => a[key].localeCompare(b[key])))
    } else {
      setTrainings([...trainings].sort((a, b) => a[key] - b[key]))
    }
  }


    const deleteTraining = async (item) => {
      const id = item.links[0].href.match(/\d+/)
      await trainingService.deleteTraining(id)
      fetchData()
    }


  return (
  <div>
  <p> Filter by <b>{filterKey}</b> </p>
  <input label="filter" value={filterString} onChange={handleFilterChange}/>
  <table>
  <thead><tr>{trainingHeaders.map((header, i) => <th key={i} onClick={() => sortByKey(header)}>{header.toUpperCase()}</th>)}</tr></thead>
  <List data={trainingsToShow} deleteTraining={deleteTraining} />
  </table>
  </div>
  )
}

export default TrainingTable
