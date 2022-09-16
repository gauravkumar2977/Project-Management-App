import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/auth-actions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state ={
        email:'' ,
        password:''
    }
    actionChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    actionSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.signIn(this.state)
    }
    render() {
        const {authError, auth} =this.props;
        if(auth.uid)  return <Redirect to='/' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.actionSubmit}>
                    <h4 className="grey-text text-darken-4">Log-In</h4>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" onChange={this.actionChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.actionChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn red lighten-1 z-depth-0">Log In</button>
                        <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps =(state) =>{
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
