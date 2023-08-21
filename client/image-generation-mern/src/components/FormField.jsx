import React from 'react'

const FormField = ({labelName,value,name,type,placeholder,handleChange,isSurpriseMe,handleSurpriseMe}) => {
  return (
    <div>
    <label className="label"
    htmlFor={name}
    >{labelName}
    </label>
    {isSurpriseMe &&(
      <button   type="button" className="button is-info"
      onClick={handleSurpriseMe}
      >Surprise me
      </button>
    )}
  
    <div>
    <input className="input is-link" type={type} placeholder={placeholder}

      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      required

    /> 
    </div>
     
    </div>
    


  )
}

export default FormField