import React from 'react'
import useFormInput from '../Hooks/useFormInput'

const TrainingForm = () => {

  const activity = useFormInput("")
  const duration = useFormInput("")
  const date = useFormInput("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const object = {
      date: date.value,
      duration: duration.value,
      activity: activity.value
    }
    console.log('this is form object', object)
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
      <input id="date" placeholder="date" type="datetime-local" {...date} required/><br />
      <input value="create" type="submit" />
      </form>

      </div>
    )
}

export default TrainingForm
