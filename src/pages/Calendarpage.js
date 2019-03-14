import React from 'react';
import MyCalendar from '../components/Calendar'

const Calendarpage = () => {

  const eventObjects = [
  {title: 'Event 1', start: '2019-03-12', end: '2019-03-13'},
  {title: 'Event 2', start: '2019-03-14', end: '2019-03-15'},
  {title: 'Event 3', start: '2019-03-18', end: '2019-03-23'},
  {title: 'Event 4', start: '2019-03-24', end: '2019-03-14'},
  {title: 'Event 5', start: '2019-03-25', end: '2019-03-26'},
  {title: 'Event 6', start: '2019-03-28', end: '2019-03-29'},
]

  /*Event {
  title: string,
  start: Date,
  end: Date,
  allDay?: boolean
  resource?: any,
}*/

  return (
    <div>
    <h2> Calendar </h2>
    <MyCalendar events={eventObjects}/>
    </div>

  )
}

export default Calendarpage
