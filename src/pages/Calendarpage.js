import React, { useState, useEffect } from 'react';
import MyCalendar from '../components/Calendar'
import times from '../services/times'
import trainingService from '../services/trainings'

const Calendarpage = () => {

  const localizer = times.getLocalizer()
  const [trainings, setTrainings] = useState([])

  const fetchData = async () => {
    const trainings = await trainingService.fetchAll()
    const calendarTrainings = trainings.map(elem => ({title: elem.activity, start: times.formatDate(elem.date), end: times.addMinutes(elem.date, elem.duration)}))
    setTrainings(calendarTrainings)
}

useEffect(() => {
 fetchData()
}, [])

const show = (e) => {
  console.log(e)
}

  return (
    <div>
    <h2> Calendar </h2>
    <MyCalendar events={trainings} localizer={localizer} show={show} />
    </div>

  )
}

export default Calendarpage
