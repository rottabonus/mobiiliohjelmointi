import React, { useState } from 'react'
import useFormInput from '../Hooks/useFormInput'
import trainingService from '../services/trainings'
import Datetime from 'react-datetime';

const TrainingForm = ({ id }) => {

const activity = useFormInput("")
const duration = useFormInput("")
const [date, setDate] = useState([''])

const handleFormSubmit = async (e) => {
  e.preventDefault()
  const object = {
    date: date,
    duration: duration.value,
    activity: activity.value,
    customer: `http://customerrest.herokuapp.com/api/customers/${id}`
  }
  await trainingService.create(object)
}

const handleDateChange = (e) => {
  setDate(e)
}

const yesterday = Datetime.moment().subtract( 1, 'day' );
const  valid = ( current ) => {
    return current.isAfter( yesterday )
}

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
    <p> enter info </p>
    <label htmlFor="activity">activity</label>
    <input id="activity" placeholder="activity" type="text" {...activity} required /><br />
    <label htmlFor="duration">duration</label>
    <input id="duration" placeholder="duration" type="number" {...duration} required /><br />
    <label htmlFor="date">date</label>
    <Datetime id="date" value={date} isValidDate={ valid } onChange={(e) => handleDateChange(e)} required/>
    <br />
    <input value="create" type="submit" />
    </form>
    </div>
  )
}

export default TrainingForm
