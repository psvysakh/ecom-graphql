import React from 'react';
import { Switch ,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';

import Homepage from './pages/Home/Homepage';
import Shoppage from './pages/shop/shop';
import Header from './components/Header/header';
import SignInUp from './pages/SignInUp/signInUp';
import Checkoutpage from './pages/checkout/checkoutpage';

import {auth,createUser} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component{
 
  toggleSubscription=null;

  componentDidMount(){
    const {setCurUser} = this.props;
    this.toggleSubscription = auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
                  const userRef = await createUser(userAuth);
                  userRef.onSnapshot(snapshot=>{
                    setCurUser({
                        id:snapshot.id,
                        ...snapshot.data()
                    })
                  })
                  
              }
              setCurUser(userAuth);
    })
   
  }
  componentWillUnmount(){
    this.toggleSubscription();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={Homepage}/>
          <Route path="/shop" component={Shoppage}/>
          <Route exact={true} path="/checkout" component={Checkoutpage}/>
          <Route exact={true} path="/signInUp" render={()=>this.props.currentUser ? (<Redirect to='/'/>):<SignInUp/>}/>
         
        </Switch>
        
      </div>
    );
  }
  
}
const mapStateToProps = createStructuredSelector({ // root-reducer destructured to only get user 
  currentUser:selectCurrentUser
})
const mapDispatchToProps =dispatch=>({
setCurUser:theUser=>dispatch(setCurrentUser(theUser))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
