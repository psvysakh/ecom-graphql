import React from 'react';
import { Switch ,Route, Link} from 'react-router-dom';
import Homepage from './components/Homepage';

const HatsPage =(props)=>{
  console.log(props);
  return(
  <div>
  <h1>HATS PAGE</h1>
  </div>
)
}
  
const HatsPageSecond =(props)=>{
  console.log(props);
  return(
  <div>
    <h1>HATS PAGE INNER</h1>
  </div>
)
}
const Jackets =(props)=>{
  return(
  <div>
    <h1>JACKETS</h1>
  </div>
)
}
const Shoes =(props)=>{
  return(
  <div>
    <h1>SHOES</h1>
  </div>
)
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Homepage}/>
        <Route exact={true} path="/hat" component={HatsPage}/>
        <Route path="/hat/:hatId" component={HatsPageSecond}/>
        <Route path="/jackets" component={Jackets}/>
        <Route path="/shoes" component={Shoes}/>
      </Switch>
      
    </div>
  );
}

export default App;
