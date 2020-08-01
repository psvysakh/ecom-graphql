import React from 'react';

import './with-spinner.scss';

const WithSpinner = WrappedComponent=>{
    const Spinner = ({isLoading,...otherProps})=>{
        return isLoading ? (
            <div className="spinneroverlay">
                <div className="spinnercontainer">
    
                </div>
            </div>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }
    return Spinner;
}

export default WithSpinner;