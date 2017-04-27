import React, { Component } from 'react';
import {Container, Menu, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

class MyNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem : ""
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })  
    
    render() {
        return (
            <Container as="nav">
                <Menu>                         
        <Menu.Item as={Link} to="/users" name='users' active={this.state.activeItem === 'users'} onClick={this.handleItemClick}>
        Utilisateurs
        </Menu.Item>
        <Menu.Item as={Link} to="/"name='login' active={this.state.activeItem === 'login'} onClick={this.handleItemClick}>
        Se Connecter
        </Menu.Item>
        <Menu.Item name='logout' active={this.state.activeItem === 'logout'} onClick={this.handleItemClick} />
      </Menu>
        </Container>
        );
    }
}

export default MyNav;