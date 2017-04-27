import React, { Component } from 'react';
import {Container, Input, Button, Header, Divider, Icon} from "semantic-ui-react";
import axios from "axios";
import {Redirect} from "react-router-dom";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titre : "J'ai pas cliqué"
        }
    }
    

    seConnecter = () => {
        axios.post("/login?username=" + document.getElementById("pseudo").value + "&password=" + document.getElementById("motDePasse"))
        .then(function (response) {
            <Redirect to="/users"/>
            console.log(response)
            .catch(function (error) {
               <Redirect to="/users"/>
            })
        })
    }

    changerTitre = () => {
        this.props.titre(this.props.name);
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
                 <Button onClick={this.seConnecter}>Valider</Button>                
            </Container>
        );
    }
}

export default LoginPage;