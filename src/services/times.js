import moment from 'moment'
import BigCalendar from 'react-big-calendar'

const getLocalizer = () => {
  return BigCalendar.momentLocalizer(moment)
}

const formatDate = (input) => {
  return new Date(input)
}

const addMinutes = (date, minutes) => {
  const newDateObject = new Date(date);
  const now = newDateObject.setMinutes(newDateObject.getMinutes() + 30); // timestamp
    return new Date(now);
}

export default { getLocalizer, formatDate, addMinutes }
