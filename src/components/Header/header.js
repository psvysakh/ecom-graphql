import React from 'react';
import {auth} from '../../firebase/firebase.util';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';
const Header =({currentUser})=>{
    return(
        <div className="header">
            <div className="logo-wrapper">
                <Logo/>
            </div>
            <div className="nav">
                 <Link className="nav-menu" to="/shop">SHOP</Link>
                 <Link className="nav-menu" to="/contact">CONTACT</Link>
                 {currentUser ? <div className="nav-menu" onClick={()=>auth.signOut()}>SIGN OUT</div> : <Link className="nav-menu" to="/signInUp">SIGNIN</Link>}
            </div>
        </div>
    )
}

export default Header;