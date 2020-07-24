import React from 'react';
import './custom-button.scss';
const CustomButton=({children,isGoogleSignIn,inverted,...otherProps})=>{
    return(
        <button className={`custom-button ${isGoogleSignIn ? 'google-signin' : ''} ${inverted ? 'invert' : ''}`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton;