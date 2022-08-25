import React from 'react'

const Radio = ({ options, name, value, setValue, ...props }) => {
  return (
    <>
        {options.map((option) => (
            <label style={{textTransform: 'capitalize' }} key={option}>
                <input type="radio" value={option} checked={value === option} onChange={({target}) => setValue(target.value)}/>
                {option}
            </label>
        ))}
    </>
  )
}

export default Radio