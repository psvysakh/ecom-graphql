import React,{useState} from 'react';
import {connect} from 'react-redux';

import {signUpStart} from '../../redux/user/user.action'; 

import FormInput from '../formInput/formInput';
import CustomButton from '../custom-button/custom-button';


import './signup.scss';

const SignUp=({signUpStart})=>{
    const [signUpData,setSignUpData]=useState({displayName:'',
    email:'',
    password:'',
    confirmPassword:''});
    const {displayName,email,password,confirmPassword} = signUpData;
    const handleChange=(event)=>{
        setSignUpData({...signUpData,[event.target.name]:event.target.value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert("Password not match");
            return;
        }
        signUpStart({email,password,displayName});
        setSignUpData({
            ...signUpData,
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
        /* try{
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
        } */
    };
    
       
        return(
            <div className="signup">
                <h2>Don't have an account ?</h2>
                <p>SignUp with email and password</p>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput 
                    name="displayName"
                    type="text"
                    label="name"
                    value={displayName}
                    required
                    handleChange={handleChange}/>
                    <FormInput 
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                    required
                    handleChange={handleChange}/>
                    <FormInput 
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                    required
                    handleChange={handleChange}/>
                    <FormInput 
                    name="confirmPassword"
                    type="password"
                    label="confirmPassword"
                    value={confirmPassword}
                    required
                    handleChange={handleChange}/>
                    <CustomButton 
                    type="submit"
                    value="submit" >SIGN UP</CustomButton>
                </form>
            </div>
        )
   
}

const mapDispatchToProps=dispatch=>({
signUpStart:(userCredential)=>dispatch(signUpStart(userCredential))
});

export default connect(null,mapDispatchToProps)(SignUp);