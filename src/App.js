import React, { Component } from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';



const aplic = (...props) => (auth)(
  <DefaultLayout />
)

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      auth:false
    }
    this.handleOnLogin=this.handleOnLogin.bind(this)
  }

  handleOnLogin()
  {
    this.setState({auth:true})
  }
  render() {

    if(this.state.auth)
    {
      return(

        <HashRouter>
          <Switch>
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="/" name="Home"  component={DefaultLayout}  />
          </Switch>
          </HashRouter>

      )
    }
    else
    {
      return (
      
          <HashRouter>
          <Switch>
          
            
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route  path="/" name="Login Page"   render={(props) => <Login auth={this.state.auth} handleOnLogin ={this.handleOnLogin} />} />
          </Switch>
          </HashRouter>
        
        
      )
    }
  }
}

export default App;
