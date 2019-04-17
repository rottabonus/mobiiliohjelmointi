import { useState } from 'react'

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleInputChange
  }
}

export default useFormInput
