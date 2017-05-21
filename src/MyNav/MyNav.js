import React, { Component } from 'react';
import {Container, Menu, Divider} from "semantic-ui-react";
import {Link} from "react-router-dom";
import axios from "axios";

let firstLinkTo = "",
    firstLinkName = "",
    secondLinkTo = "",
    secondLinkName = ""

class MyNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem : ""
        }
    }
       
    componentWillMount() {
       
        this.props.user.role.name === "administrateur" ? (
                                 
                firstLinkTo = "/app/administrateur/création",
                firstLinkName = "Création des entités",
                secondLinkTo = "/app/administrateur/gestion",
                secondLinkName = "Gestion des promos"                            
                            
            ) : (
               
            
                firstLinkTo = "/app/consultation",
                firstLinkName = "Consultation des carnets de bord",
                secondLinkTo = "/app/édition",
                secondLinkName = "Edition des carnets de bord"
            
            );
    }
       
    componentWillUpdate() {
        
        this.props.user.role.name === "administrateur" ? (
                                    
                firstLinkTo = "/app/administrateur/création",
                firstLinkName = "Création des entités",
                secondLinkTo = "/app/administrateur/gestion",
                secondLinkName = "Gestion des promos"                            
                            
            ) : (
                
            
                firstLinkTo = "/app/consultation",
                firstLinkName = "Consultation des carnets de bord",
                secondLinkTo = "/app/édition",
                secondLinkName = "Edition des carnets de bord"
            
            );
    }    

    loggingOutCors = (e, {name}) => {
        
        this.handleItemClick(e, { name });
        this.props.deleteUser();        
    }
    // à utiliser quand on build
    loggingOut = (e, { name }) => {
        const self = this;
        this.handleItemClick(e, { name });
        axios.get("/logout")
        .then(function (response) {
            self.props.deleteUser();
        })
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }  
    
    render() {

        const activeItem = this.state.activeItem;
        console.log("MyNav render")
        return (
            <Container as="nav">
                <Menu color="red" widths={3}>                         
                    <Menu.Item as={Link} to={firstLinkTo} name='création' active={activeItem === 'création'} onClick={this.handleItemClick}>
                        {firstLinkName}
                    </Menu.Item>
                    <Menu.Item as={Link} to={secondLinkTo} name='gestion' active={activeItem === 'gestion'} onClick={this.handleItemClick}>
                        {secondLinkName}
                    </Menu.Item>
                    <Menu.Item position="right" name='logout' active={activeItem === 'logout'} onClick={this.loggingOutCors}>
                        Se déconnecter
                    </Menu.Item>
                </Menu>
                {/*<Divider className="test" section />*/}
            </Container>
        );
    }
}

export default MyNav;