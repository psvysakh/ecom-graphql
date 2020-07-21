import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signup/signup';
import './signInUp.scss';
const SignInUp =()=>{
    return(
        <div className="signInUp">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInUp;