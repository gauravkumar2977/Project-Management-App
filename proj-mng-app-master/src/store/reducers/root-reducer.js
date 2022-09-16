import AuthReducer from './auth-reducer'
import ProjectReducer from './project-reducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const RootReducer = combineReducers({
    auth : AuthReducer,
    project : ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default RootReducer