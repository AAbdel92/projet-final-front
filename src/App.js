import React, { Component } from 'react';
import './App.css';
import {Router, Route} from "react-router";
import MyHeader from "./MyHeader/MyHeader.js";
import MyNav from "./MyNav/MyNav.js";
import LoginPage from "./LoginPage/LoginPage.js";
import Users from "./Users/Users.js";
import createBrowserHistory from "history/createBrowserHistory";
import "semantic-ui-css/semantic.min.css";

const history = createBrowserHistory();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titre : "Mon Titre"
    }
  }

  changerTitre = ([name]) => {
    this.setState({
      titre : name,
      loggedIn : false
    })
  }
  

  pageLogin = () => {
    return <LoginPage name="Bienvenue !" titre={this.changerTitre} />
  }

  pageUser = () => {
    return <Users name="Liste des utilisateurs" titre={this.changerTitre} />
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={MyHeader} />
          <Route path="/index" component={MyNav} />
          <Route exact path="/" render={this.state.loggedIn ? (
            this.pageUser ) : (
              this.pageLogin
            )
          
            this.pageLogin} />
          <Route path="/users" render={this.pageUser} />
        </div>
      </Router>     
    );
  }
}

export default App;
