import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const confirm = ({ item }) => {
confirmAlert(
  {
     title: 'Confirm to delete',
     message: 'Are you sure want to delete training',
     buttons:
     [{
        label: 'Yes',
        onClick: () => item},
       {
         label: 'No',
         onClick: () => confirmation("no")
    }]
   })
 }

const confirmation = (input) => {
  console.log(input)
}

export default { confirm }
