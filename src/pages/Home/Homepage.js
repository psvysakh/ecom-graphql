import React from 'react';
import {Link} from 'react-router-dom';
import Directory from '../../components/directory/directory';
import './Homepage.scss';
const Homepage = (props)=>{
    return(
        <div className="Home-page">
            <div>
                <Directory/>
            </div>
                
        </div>
       
    )
}

export default Homepage;