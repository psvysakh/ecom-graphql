import React from 'react';
import {Link} from 'react-router-dom';
import Directory from '../../components/directory/directory';
import './Homepage.scss';
const Homepage = (props)=>{
    return(
        <div className="Home-page">
            <div>
            
            <button onClick={()=>{props.history.push('/hats')}}>Hats</button>
                <Directory/>
            </div>
                
        </div>
       
    )
}

export default Homepage;