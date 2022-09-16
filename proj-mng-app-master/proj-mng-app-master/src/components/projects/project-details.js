import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

const ProjectDetails = (props) =>{
    //console.log(props);
    const {project,auth} = props;
    if(!auth.uid)  return <Redirect to='/signin' />
    if(project){
        return(
          <div className="container section project-details">
            <div className="card z-depth-2">
                <div className="card-content red lighten-4">
                    <div className="card-title">{project.title}</div>
                    <p>{project.content}</p>
                </div>
                <div className="card-action blue lighten-5 black-text">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>{project.createdTime.toDate().toString().slice(0,15)}</div>
                </div>
            </div>
          </div>
        )
    } 
    else{
        return(
            <div className="conatiner center">
                <p>Loading task...</p>
            </div>
        )
    }  
}
const mapStateToProps =(state,ownProps) =>{
    //console.log(state);
    const id=ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return{
        project: project,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
