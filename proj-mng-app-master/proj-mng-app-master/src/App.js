import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/nav-bar'
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/project-details'
import SignIn from './components/authentication/sign-in'
import SignUp from './components/authentication/sign-up'
import CreateProject from './components/projects/create-project'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
