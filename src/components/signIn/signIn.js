import React,{useState} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/formInput/formInput';
import CustomButton from '../../components/custom-button/custom-button';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action';

import './signIn.scss';
const SignIn=({emailSignInStart,googleSignInStart})=>{
  const [userCredential,setCredential] = useState({email:'',password:''})
  const {email,password}=userCredential; 
  const handleChange=(e)=>{
        const {value,name}=e.target;
        setCredential({...userCredential,[name]:value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        emailSignInStart(email,password);
        /* try{
            await auth.signInWithEmailAndPassword(email,password);
        } catch(error){
            console.log(error);
        } */
        setCredential({email:'',password:''});
    }
   
        return(
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign In with your Email</span>

                <form onSubmit={handleSubmit}>
                    <Input 
                     name="email"
                    type="email"
                    label="email"
                    value={email} 
                    required
                    handleChange={handleChange}/>

                    <Input 
                    name="password"
                    type="password"
                    label="password"
                    value={password} 
                    required
                    handleChange={handleChange}/>
                    <CustomButton 
                    type="submit"
                    value="submit" >SIGN IN</CustomButton>
                    <CustomButton 
                    isGoogleSignIn
                    type="button"
                    onClick={googleSignInStart} >SIGN IN WITH GOOGLE</CustomButton>
                </form>
            </div>
        )
   
}
const mapDispatchToProps =dispatch=>({
googleSignInStart:()=>dispatch(googleSignInStart()),
emailSignInStart:(email,password)=>dispatch(emailSignInStart(email,password))
})

export default connect(null,mapDispatchToProps)(SignIn);  