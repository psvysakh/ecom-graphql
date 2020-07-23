import React from 'react';
import {auth} from '../../firebase/firebase.util';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cartIcon';
import Cartdropdown from '../cartdropdown/cart-dropdown';
import './header.scss';
const Header =({currentUser,hidden})=>{
    return(
        <div className="header">
            <div className="logo-wrapper">
                <Logo/>
            </div>
            <div className="nav">
                 <Link className="nav-menu" to="/shop">SHOP</Link>
                 <Link className="nav-menu" to="/contact">CONTACT</Link>
                 {currentUser ? <div className="nav-menu" onClick={()=>auth.signOut()}>SIGN OUT</div> : <Link className="nav-menu" to="/signInUp">SIGNIN</Link>}
                 <CartIcon/>
            </div>
            {hidden ? null : <Cartdropdown/>}
            
        </div>
    )
}
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({ //the root-reducer destructured to gain direct value access from it.
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);