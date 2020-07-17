import React from 'react';
import './formInput.scss';
const formInput=({handleChange,label, ...otherProps})=>{
    return(
        <div className="input-group">
            {label ? <label className={`${otherProps.value.length ? 'Shrink':''} form-label`}>{label}</label> : null}
            <input 
            className="form-input"
            onChange={handleChange}
            {...otherProps}/>
        </div>
        
    )
}

export default formInput;