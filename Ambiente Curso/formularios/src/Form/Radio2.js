import React from 'react'

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if(active === false) return null;  
  return (
        <fieldset 
        style={{
                padding: '2rem',
                marginBottom: '1rem',
                border:'2px solid #eee'
            }}>
            <legend>{pergunta}</legend>
            {options.map((option) => (
                <label key={option}>
                    <input 
                        type="radio" 
                        id={id}
                        value={option} 
                        checked={value === option} 
                        onChange={onChange}
                    />
                    {option}
                </label>
            ))}
        </fieldset>   
  )
}

export default Radio