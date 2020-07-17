import React from 'react';
import { Switch ,Route} from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Shoppage from './pages/shop/shop';
import Header from './components/Header/header';
import SignInUp from './pages/SignInUp/signInUp';

import {auth} from './firebase/firebase.util';


class App extends React.Component{
  state={
    currentUser:null
  }
  unSubscribeFromAuth=null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path="/" component={Homepage}/>
          <Route exact={true} path="/shop" component={Shoppage}/>
          <Route exact={true} path="/signInUp" component={SignInUp}/>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
