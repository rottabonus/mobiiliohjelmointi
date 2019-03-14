import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)

const MyCalendar = ({ events }) => (
   <div>
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
