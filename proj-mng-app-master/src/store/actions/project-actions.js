export const createProject = (project) =>{
    return (dispatch, getState,{getFirebase,getFirestore}) => {
        //ASYC CODE 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdTime: new Date()
        }).then(() =>{
            dispatch({type:'CREATE-PROJECT', project}) ;
        }).catch((err) =>{
            dispatch({type:'ERROR-CREATE-PROJECT', err});
        })
    }
};