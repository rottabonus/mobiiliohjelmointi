import React, { useState , useEffect} from 'react'
import List from './List'
import trainingService from '../services/trainings'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import times from '../services/times'


const TrainingTable = () => {

   const [trainings, setTrainings] = useState([])
  const [filterString, setFilterString] = useState('')
  const [sorted, setSorted] = useState(0)
  const [trainingHeaders, setTrainingheaders] = useState([])
  const [filterKey, setFilterkey] = useState(['activity'])
  const trainingsToShow = trainings.filter(a => a[filterKey].toString().toLowerCase().includes(filterString.toLowerCase()))

  const fetchData = async () => {
    const trainings = await trainingService.getTrainings()
    const formatted = trainings.map((elem, i) => i ={ id:elem.id, date: times.formatDate(elem.date), duration: elem.duration, activity: elem.activity, customer: elem.customer })
    setTrainings(formatted)
    const values = Object.values(formatted[0])
    const keys = Object.keys(formatted[0])
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

    if (filterKey === key && sorted === 0){
      setSorted(1)
      if (typeof trainings[0][key] === 'string'){
        setTrainings([...trainings].sort((a, b) => a[key].localeCompare(b[key])))
      } else {
        setTrainings([...trainings].sort((a, b) => b[key] - a[key]))
      }
    } else {
      setSorted(0)
    setFilterkey(key)
     if (typeof trainings[0][key] === 'string'){
      setTrainings([...trainings].sort((a, b) => b[key].localeCompare(a[key])))
    } else {
      setTrainings([...trainings].sort((a, b) => a[key] - b[key]))
    }
  }
  }

    const deleteTraining = async (item) => {
        await trainingService.deleteTraining(item.id)
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
  <thead><tr>{trainingHeaders.map((header, i) => <th className={`priority-${i+1}`} key={i} onClick={() => sortByKey(header)}>{header.toUpperCase()}</th>)}<th className="notHoverableHeader">DELETE</th></tr></thead>
  <List data={trainingsToShow} deleteTraining={confirm} />
  </table>
  </div>

  )
}

export default TrainingTable
