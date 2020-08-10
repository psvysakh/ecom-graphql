import React from 'react';
import {connect} from 'react-redux';
import Input from '../../components/formInput/formInput';
import CustomButton from '../../components/custom-button/custom-button';
import {signInWithGoogle, auth} from  '../../firebase/firebase.util';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action';
import './signIn.scss';
class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({[name]:value});
    }
    handleSubmit=async (e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        const {emailSignInStart} = this.props;
       console.log(email,password);
        emailSignInStart(email,password);
        /* try{
            await auth.signInWithEmailAndPassword(email,password);
        } catch(error){
            console.log(error);
        } */
        this.setState({email:'',password:''});
    }
    render(){
        const {googleSignInStart} = this.props
        return(
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign In with your Email</span>

                <form onSubmit={this.handleSubmit}>
                    <Input 
                     name="email"
                    type="email"
                    label="email"
                    value={this.state.email} 
                    required
                    handleChange={this.handleChange}/>

                    <Input 
                    name="password"
                    type="password"
                    label="password"
                    value={this.state.password} 
                    required
                    handleChange={this.handleChange}/>
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
}
const mapDispatchToProps =dispatch=>({
googleSignInStart:()=>dispatch(googleSignInStart()),
emailSignInStart:(email,password)=>dispatch(emailSignInStart(email,password))
})

export default connect(null,mapDispatchToProps)(SignIn);  