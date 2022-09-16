import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './signed-in-links'
import SignedOutLinks from './signed-out-links'
import {connect} from 'react-redux'

const Navbar = (props) =>{
    const {auth, profile} = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    return(
        <nav className="nav-wrapper blue darken-1">
            <div className="container">
              <Link to='/' className="brand-logo">Project Management App</Link>
              {links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)