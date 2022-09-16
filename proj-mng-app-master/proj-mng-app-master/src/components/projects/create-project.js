import React, {Component} from 'react'
import {createProject} from '../../store/actions/project-actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
    state ={
        title:'' ,
        content:''
    }
    actionChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    actionSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid)  return <Redirect to='/signin' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.actionSubmit}>
                    <h4 className="grey-text text-darken-4">Create new Task</h4>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.actionChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Task Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.actionChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn red lighten-1 z-depth-0">Add Task</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project)=>dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
