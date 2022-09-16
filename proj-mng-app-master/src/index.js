import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from './store/reducers/root-reducer';
import {Provider,useSelector} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore'
import {ReactReduxFirebaseProvider,getFirebase,isLoaded} from 'react-redux-firebase'
import fbConfig from './config/fbConfig' 
import firebase from 'firebase/app'


const store=createStore(RootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    //reactReduxFirebase(fbConfig) **NOT REQD IN V3 OF FIREBASE
    )
  );
const rrfConfig = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };
function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
        return children
  }  
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
