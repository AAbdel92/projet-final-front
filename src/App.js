import React, { Component } from 'react';
import './App.css';
import {Router, Route, Redirect} from "react-router";
import MySite from "./MySite/MySite.js";
import "semantic-ui-css/semantic.min.css";

class App extends Component {

  constructor(props) {
        super(props);
        this.state = {     
            loggedIn : false,
            user : {
                name : "",
                prenom : "",
                role : ""
             }
          }
     }

     loadUser = (pseudo, role) => {  
  this.setState({
    loggedIn : true,
    user : {
      name : pseudo,
      role : role
    }    
  })  
}

  render() {   
    return (      
        <MySite user={this.state.user} loggedIn={this.state.loggedIn} methode={this.loadUser} />
    );
  }
}

export default App;
