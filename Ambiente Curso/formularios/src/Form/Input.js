import React from 'react'

const Input = ({id, type, label, nome, setValue, ...props}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} name={nome} id={id} onChange={({target}) => setValue(target.value)} {...props}/>
    </div>
  )
}

export default Input;