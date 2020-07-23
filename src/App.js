import React from 'react';
import { Switch ,Route} from 'react-router-dom';
import {connect} from 'react-redux';


import Homepage from './pages/Home/Homepage';
import Shoppage from './pages/shop/shop';
import Header from './components/Header/header';
import SignInUp from './pages/SignInUp/signInUp';

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
          <Route exact={true} path="/shop" component={Shoppage}/>
          <Route exact={true} path="/signInUp" component={SignInUp}/>
        </Switch>
        
      </div>
    );
  }
  
}
const mapDispatchToProps =dispatch=>({
setCurUser:theUser=>dispatch(setCurrentUser(theUser))
})
export default connect(null,mapDispatchToProps)(App);
