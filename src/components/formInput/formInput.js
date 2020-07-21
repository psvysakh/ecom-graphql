import React from 'react';
import './formInput.scss';
const FormInput=({handleChange,label, ...otherProps})=>{
    return(
        <div className="input-group">
            {label ? <label className={`${otherProps.value.length ? 'Shrink':''} form-label`}>{label}</label> : null}
            <input 
            className="form-input"
            {...otherProps}
            onChange={handleChange}
            />
        </div>
        
    )
}

export default FormInput;