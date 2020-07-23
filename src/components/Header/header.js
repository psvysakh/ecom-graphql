import React from 'react';
import {auth} from '../../firebase/firebase.util';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
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
const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header);