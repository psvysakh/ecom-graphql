import React from 'react';
import {auth} from '../../firebase/firebase.util';
import {Link,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selector';


import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cartIcon';
import Cartdropdown from '../cartdropdown/cart-dropdown';
import './header.scss';
const Header =({currentUser,hidden,history})=>{
    return(
        <div className="header">
            <div className="logo-wrapper" onClick={()=>history.push('/')}>
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
const mapStateToProps=createStructuredSelector({ 
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default withRouter(connect(mapStateToProps)(Header));