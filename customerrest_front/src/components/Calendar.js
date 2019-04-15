import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const MyCalendar = ({ events, localizer, show }) => (
   <div className={"calendar"}>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      selectable={true}
      onSelectEvent={(e) =>show(e)}
      onSelectSlot={(e) =>show(e)}
    />
  </div>
)

export default MyCalendar
