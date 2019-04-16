import React from 'react'
import useFormInput from '../Hooks/useFormInput'
import trainingService from '../services/trainings'

const TrainingForm = (props) => {

const activity = useFormInput("")
const duration = useFormInput("")
const date = useFormInput("")

const handleFormSubmit = async (e) => {
  e.preventDefault()
  const object = {
    date: date.value,
    duration: duration.value,
    activity: activity.value,
    customer: `http://customerrest.herokuapp.com/api/customers/${props.id}`
  }

  //console.log('will send this:', object)
  await trainingService.create(object)
  props.history.push("/trainings")
}


  return (
    <div className="container">
    <form onSubmit={handleFormSubmit}>
    <p> enter info </p>
    <label htmlFor="activity">activity</label>
    <input id="activity" placeholder="activity" type="text" {...activity} required /><br />
    <label htmlFor="duration">duration</label>
    <input id="duration" placeholder="duration" min="1" type="number" {...duration} required /><br />
    <label htmlFor="date">date</label>
    <input id="date" placeholder="date" type="date" {...date} required /><br />
    <br />
    <input value="create" type="submit" />
    </form>
    </div>
  )
}

export default TrainingForm
