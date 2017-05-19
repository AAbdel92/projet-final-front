import React, { Component } from 'react';
import {Router, Route, Redirect} from "react-router";
import MyHeader from "../MyHeader/MyHeader.js";
import MyNav from "../MyNav/MyNav.js";
import LoginPage from "../LoginPage/LoginPage.js";
import AdminPage from "../Users/Users.js";
import createBrowserHistory from "history/createBrowserHistory";



const history = createBrowserHistory();

class MySite extends Component {

    // sendUser = (boolean, pseudo, role) => {
    //     this.props.methode(boolean, pseudo, role);
    // }

    // changeLoggedIn = (boolean) => {
    //     this.props.loggedIn = boolean;
    // } 
   
  pageLogin = () => {
    return <LoginPage name="Page de Login" methode={this.props.methode}/>
  }

  pageAdmin = () => {
    return <AdminPage name="Page Admin" />
  }

  barreNav = () => {
      return <MyNav methode={this.props.methode}/>
  } 

  componentWillUpdate() {
      console.log("will update")
      
  }
  componentDidUpdate() {
      console.log("did update")
       this.props.loggedIn ? (history.push('/' + this.props.user.role) ) : (history.push('/') );
  }

  componentDidMount () {
      console.log("did mount")
  }

  componentWillMount() {
      console.log("will mount")
  }

    render() {
        console.log("render")
        return (
            <Router history={history}>
        <div>

          nom : {this.props.user.name} et role : {this.props.user.role} et loggedIn : {this.props.loggedIn.toString()}
          <Route path="/" component={MyHeader} />
          <Route exact path="/" render={this.pageLogin} />
          <Route path="/administrateur" render={this.barreNav} />
          <Route path="/administrateur" render={this.pageAdmin} />
          {/*{
            this.props.loggedIn ? (history.push('/admin') ) : (history.push('/') )
          }*/}
                           
                  
        </div>
      </Router>     
        );
    }
}

export default MySite;