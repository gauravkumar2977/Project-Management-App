import React from 'react'

const ProjectSummary = ({project}) =>{
    return (
        <div className="card depth-1 project-summary">
            <div className="card-content grey-text text-darken-4">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{project.createdTime.toDate().toString().slice(0,15)}</p>
            </div>
        </div>
    )
}

export default ProjectSummary