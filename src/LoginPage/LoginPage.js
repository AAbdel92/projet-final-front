import React, { Component } from 'react';
import {Grid, Container, Input, Button, Header, Divider, Icon, Message, Form} from "semantic-ui-react";
import axios from "axios";
import MyHeader from "../MyHeader/MyHeader.js";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden : true,
            email : "",
            password : ""            
        }
    }   

    handleEmailChange = (event) => {
        this.setState({
            email : event.target.value
        })
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    loginCors = (e) => {
        e.preventDefault();
        const self = this;
        let user = {};
            user["email"] = document.getElementById("email").value;
            user["password"] = document.getElementById("password").value;
        axios.post("http://localhost:8080/api/users/logged", user)
                .then(function (response) {
                    //  self.setState({
                    //     isHidden : true
                    //  })
                     self.props.getUser(true, response.data);                   
                     
                })
                .catch(function (error) {
                    console.log("catch")
                    self.setState({
                        isHidden : false
                    })
                    
                })
    }   
   
    // a utiliser après avoir fait un build
    login = (e) => {
        e.preventDefault();
        const self = this;
        axios.post("/login?username=" + this.state.email + "&password=" + this.state.password)
        .then(function (response) {
            let user = {};
            user["email"] = self.state.email
            user["password"] = self.state.password
            axios.post("api/users/logged", user)
                .then(function (response) {
                    if (response.data != null) {                    
                     self.props.getUser(true, response.data);
                    }
                     console.log(response)
                })
                .catch(function (error) {
                    self.setState({
                        isHidden : false
                    })
                    console.log(error)
                })           
        })
        .catch (function (error) {
            self.setState({
                        isHidden : false
                    })
               console.log(error)
        })
    }    
    
    render() {
        const isHidden = this.state.isHidden,
            email = this.state.email,
            password = this.state.password;
        

        return (
            <div>                
                <Container as="main" textAlign="center">
                    <Divider section />                    
                    <Header textAlign='center' as="h1">
                        Bienvenue Simplonien !
                    </Header>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <p>
                                    Vous êtes sur l'application permettant de gérer la communication 
                                    entre les différents acteurs d'une promo.
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <Form>
                                    <Input
                                        type="email"
                                        icon={<Icon name='id badge' inverted circular link />}
                                        placeholder="Votre e-mail"
                                        id="email"
                                        value={email}
                                        onChange={this.handleEmailChange}
                                    />
                                    <Input
                                        type="password"
                                        icon={<Icon name='privacy' inverted circular link />}
                                        placeholder="Votre mot de passe"
                                        id="password"
                                        value={password}
                                        onChange={this.handlePasswordChange}
                                    />                        
                                    {/* A changer en this.login si build*/}
                                    <Button onClick={this.loginCors}>Valider</Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>                                        
                    
                    <Message hidden={isHidden} error={!isHidden}>
                            <Message.Header>
                            Problème de connexion
                            </Message.Header>
                            <p>
                            Informations de connexion erronées. Veuillez vérifier l'exactitude de vos identifiants.
                            </p>
                    </Message>                
                </Container>
            </div>
        );
    }
}

export default LoginPage;