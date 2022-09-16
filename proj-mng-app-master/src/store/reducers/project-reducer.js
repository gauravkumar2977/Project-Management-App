const initState = {
    projects : [
        {id:'1', title:'titleeee',content:'contenttttttt'},
        {id:'2', title:'titlee2222',content:'contenttttttt222'},
        {id:'3', title:'titleeee3333',content:'contenttttttt333'}
    ]
}

const ProjectReducer = (state=initState, action) =>{
    switch (action.type) {
        case 'CREATE-PROJECT':
            console.log('project created', action.project)
            return state;
        case 'ERROR-CREATE-PROJECT':
            console.log('error in creating project',action.err)
            return state;
        default:
            return state;
    }
}

export default ProjectReducer