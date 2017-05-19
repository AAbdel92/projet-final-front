import React, { Component } from 'react';
import {Container, Input, Button, Header, Divider, Icon} from "semantic-ui-react";
import axios from "axios";
import {Redirect} from "react-router-dom";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {            
        }
    }

    addUser = (pseudo, role) => {
        this.props.user(pseudo, role);
    }

    seConnecterCors = () => {
        axios.post("http://localhost:8080/api/users/logged", user)
                .then(function (response) {                    
                     self.props.methode(true, response.data.firstname, response.data.role.name);
                     console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })
    }   
   
    // a utiliser après avoir fait un build
    seConnecter = () => {
        const self = this;
        axios.post("/login?username=" + document.getElementById("pseudo").value + "&password=" + document.getElementById("motDePasse").value)
        .then(function (response) {
            let user = {};
            user["email"] = document.getElementById("pseudo").value;
            user["password"] = document.getElementById("motDePasse").value;
            axios.post("api/users/logged", user)
                .then(function (response) {                    
                     self.props.methode(true, response.data.firstname, response.data.role.name);
                     console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })         
            .catch(function (error) {
               console.log(error)
            })
        })
    }

    testConnection = () => {
       // this.addUser("Damien", "Admin");
       this.props.user("Damien", "Admin");
    }
     
    
    render() {
        return (
            <Container as="main" textAlign="center">
                <Divider hidden />
                <Header as="h1">
                    {this.props.name}
                </Header>
                <Divider section/>
                <Input
                    icon={<Icon name='id badge' inverted circular link />}
                    placeholder="pseudo"
                    id="pseudo"
                 />
               
                 <Input
                    icon={<Icon name='privacy' inverted circular link />}
                    placeholder="mot de passe"
                    id="motDePasse"
                 />
                 {/* A changer en this.seConnecter si build*/}
                 <Button onClick={this.seConnecterCors}>Valider</Button>                
            </Container>
        );
    }
}

export default LoginPage;