import React from 'react'

const Checkbox = ({options, values, setValues,}) => {

    function handleChange({target}){
        const { checked, value} = target;
        if(checked)
            setValues([...values, target.value]);
        else
            setValues(values.filter((item) => item !== value));
    }

    function handleChecked(item){
        return values.includes(item);
    }
  return (
    <div>
        {options.map((option) => (
            <label key={option}>
                <input type="checkbox" value={option} checked={handleChecked(option)} onChange={handleChange}/>
                {option}
            </label>           
        ))}
    </div>
  )
}

export default Checkbox