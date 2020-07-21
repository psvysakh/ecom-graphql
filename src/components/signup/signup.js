import React from 'react';

import FormInput from '../formInput/formInput';
import CustomButton from '../custom-button/custom-button';

import {auth, createUser} from '../../firebase/firebase.util';

import './signup.scss';

class SignUp extends React.Component{
    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=async (e)=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert("Password not match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUser(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.log(error);
        }
    };
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="signup">
                <h2>Don't have an account ?</h2>
                <p>SignUp with email and password</p>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="displayName"
                    type="text"
                    label="name"
                    value={displayName}
                    required
                    handleChange={this.handleChange}/>
                    <FormInput 
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                    required
                    handleChange={this.handleChange}/>
                    <FormInput 
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                    required
                    handleChange={this.handleChange}/>
                    <FormInput 
                    name="confirmPassword"
                    type="password"
                    label="confirmPassword"
                    value={confirmPassword}
                    required
                    handleChange={this.handleChange}/>
                    <CustomButton 
                    type="submit"
                    value="submit" >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;