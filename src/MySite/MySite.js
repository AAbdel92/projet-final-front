import React, { Component } from 'react';
import {Router, Route, Redirect} from "react-router";
import MyHeader from "../MyHeader/MyHeader.js";
import MyNav from "../MyNav/MyNav.js";
import LoginPage from "../LoginPage/LoginPage.js";
import AdminPage from "../Users/Users.js";
import createBrowserHistory from "history/createBrowserHistory";



const history = createBrowserHistory();

class MySite extends Component {

    sendUser = (pseudo, role) => {
        this.props.methode(pseudo, role);
    }
   
  pageLogin = () => {
    return <LoginPage name="Page de Login" user={this.sendUser}/>
  }

  pageAdmin = () => {
    return <AdminPage name="Page Admin" />
  } 

  componentWillUpdate() {
      console.log("will update")
      
  }
  componentDidUpdate() {
      console.log("did update")
       this.props.loggedIn ? (history.push('/admin') ) : (history.push('/') );
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
          <Route path="/admin" component={MyNav} />
          <Route path="/admin" render={this.pageAdmin} />
          {/*{
            this.props.loggedIn ? (history.push('/admin') ) : (history.push('/') )
          }*/}
                           
                  
        </div>
      </Router>     
        );
    }
}

export default MySite;