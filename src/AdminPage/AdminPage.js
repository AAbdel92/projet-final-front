import React, { Component } from 'react';
import {Container, Header, Divider} from "semantic-ui-react";
import {Card} from "semantic-ui-react";
import MyHeader from "../MyHeader/MyHeader.js";
import MyNav from "../MyNav/MyNav.js";

class AdminPage extends Component {

    componentWillMount() {
        if (!this.props.loggedIn) {
           this.props.redirect();
        }
    }

    render() {
        console.log("AdminPage render")
        return (
            <div>
                {/*<MyHeader user={this.props.user}/>
                <MyNav user={this.props.user} deleteUser={this.props.deleteUser}/>*/}
                <Container textAlign="center">                                     
                    <Header as="h1" textAlign="center">
                        {this.props.name}
                    </Header>                
                </Container>
            </div>
        );
    }
}

export default AdminPage;