import React from 'react'
import useFormInput from '../Hooks/useFormInput'
import customerService from '../services/customers'

const CustomerForm = () => {

  const firstname = useFormInput("")
  const lastname = useFormInput("")
  const streetaddress = useFormInput("")
  const postcode = useFormInput("")
  const city = useFormInput("")
  const email = useFormInput("")
  const phone = useFormInput("")

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const object = {
      firstname: firstname.value,
      lastname: lastname.value,
      streetaddress: streetaddress.value,
      postcode: postcode.value,
      city: city.value,
      email: email.value,
      phone: phone.value
    }
    await customerService.create(object)
  }

    return (
      <div>
      <form onSubmit={handleFormSubmit}>
      <p> enter info </p>
      <label htmlFor="firstname">firstname</label>
      <input id="firstname" placeholder="firstname" type="text" {...firstname} required /><br />
      <label htmlFor="lastname">lastname</label>
      <input id="lastname" placeholder="lastname" type="text" {...lastname} required /><br />
      <label htmlFor="streetaddress">streetaddress</label>
      <input id="streetaddress" placeholder="streetaddress" type="text" {...streetaddress} required/><br />
      <label htmlFor="postcode">postcode</label>
      <input id="postcode" placeholder="postcode" type="text" {...postcode} required /><br />
      <label htmlFor="city">city</label>
      <input id="city" placeholder="city" type="text" {...city} required /><br />
      <label htmlFor="email">email</label>
      <input id="email" placeholder="email@email.com" type="email" {...email} required/><br />
      <label htmlFor="phone">phone</label>
      <input id="phone" placeholder="phone" type="text" {...phone} required /><br />
      <input value="create" type="submit" />
      </form>
      </div>
    )
}

export default CustomerForm
