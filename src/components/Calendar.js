import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const MyCalendar = ({ events, localizer }) => (
   <div className={"calendar"}>
    <BigCalendar
      localizer={localizer}
      views={['month', 'week']}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default MyCalendar
