import React, { useState , useEffect} from 'react'
import List from './List'
import trainingService from '../services/trainings'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import times from '../services/times'


const TrainingTable = () => {

  const [trainings, setTrainings] = useState([])
  const [filterString, setFilterString] = useState('')
  const [trainingHeaders, setTrainingheaders] = useState([])
  const [filterKey, setFilterkey] = useState(['activity'])
  const trainingsToShow = trainings.filter(a => a[filterKey].toString().toLowerCase().includes(filterString.toLowerCase()))

  const fetchData = async () => {
    const trainings = await trainingService.fetchAll()
    const formatted = trainings.map((elem, i) => i ={ date: times.formatDate(elem.date), activity: elem.activity, duration: elem.duration, content: elem.content, links: elem.links })
    setTrainings(formatted)
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
      console.log(item)
      const id = item.links[0].href.match(/\d+/)
        await trainingService.deleteTraining(id)
          fetchData()
    }

    const confirm = (item) => {
    confirmAlert(
      {
         title: 'Confirm to delete',
         message: 'Are you sure want to delete training',
         buttons:
         [{
            label: 'Yes',
            onClick: () => deleteTraining(item)},
           {
             label: 'No',
             onClick: () => console.log('no')
        }]
       })
     }

  return (
  <div>
  <p> Filter by <b>{filterKey}</b> </p>
  <input label="filter" value={filterString} onChange={handleFilterChange}/>
  <table>
  <thead><tr>{trainingHeaders.map((header, i) => <th className="sortableHeader" key={i} onClick={() => sortByKey(header)}>{header.toUpperCase()}</th>)}<th className="notHoverableHeader">DELETE</th></tr></thead>
  <List data={trainingsToShow} deleteTraining={confirm} />
  </table>
  </div>

  )
}

export default TrainingTable
