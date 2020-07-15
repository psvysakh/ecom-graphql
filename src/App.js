import React from 'react';
import { Switch ,Route, Link} from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Shoppage from './pages/shop/shop';

  


function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Homepage}/>
        <Route exact={true} path="/shop" component={Shoppage}/>
      </Switch>
      
    </div>
  );
}

export default App;
