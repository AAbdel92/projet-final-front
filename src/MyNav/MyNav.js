import React, { Component } from 'react';
import {Container, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import LinkItem from "./LinkItem/LinkItem.js";
import axios from "axios";
import MyMenu from "./MyMenu/MyMenu.js";

let firstLinkTo = "",
    firstLinkName = "",
    secondLinkTo = "",
    secondLinkName = ""

class MyNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem : "",
            links : []
        }
    }
       
    componentWillMount() {
        console.log("will mount : " + this.props.user.role.name)
        this.setState({
            links : this.linksByRole(null)
        }, () => {
            console.log(this.state.links)
        })
                
        }

        linksByRole = (arrayOfLinks) => {
           const roleName = this.props.user.role.name;
           let result = []
           if (arrayOfLinks != null) {
            let result = arrayOfLinks
           }
            
                if (roleName === "administrateur") {
                    result.push(
                            {
                            url : "/app/administrateur/création",
                            name : "Création des entités"
                        },{
                            url :  "/app/administrateur/gestion",
                            name : "Gestion des promos"
                        }                    
                            )           
                    
                } else if (roleName === "apprenant" || roleName === "tuteur") {
                    result.push(
                            {
                            url : "/app/consultation",
                            name : "Consultation des carnets de bord"
                        },{
                            url :  "/app/édition",
                            name : "Edition des carnets de bord"
                        }    
                            )            
                } else {
                    console.log("role formateur")           
                    result.push(
                            {
                            url : "/app/consultation",
                            name : "Consultation des carnets de bord"
                        },{
                            url :  "/app/édition",
                            name : "Edition des carnets de bord"
                        },{
                            url : "/app/finalisation",
                            name : "Finalisation des carnets de bord"
                        }    
                            )
                }
                return result;
           

        // if (result != this.state.links) {
        //     console.log("setState du remplissage des links")
        //     this.setState({
        //         links : result
        //     })
        // }
        
                                 
                // firstLinkTo = "/app/administrateur/création",
                // firstLinkName = "Création des entités",
                // secondLinkTo = "/app/administrateur/gestion",
                // secondLinkName = "Gestion des promos"                            
                            
          
               
            
                // firstLinkTo = "/app/consultation",
                // firstLinkName = "Consultation des carnets de bord",
                // secondLinkTo = "/app/édition",
                // secondLinkName = "Edition des carnets de bord"
            
            
    }
       
    componentWillUpdate() {
        console.log("will update mynav")
        console.log(this.linksByRole(null))
        console.log(this.state.links)
        if ( this.linksByRole(null).length != this.state.links.length && this.linksByRole[0] != this.state.links[0]) {            
            this.setState({
                links : this.linksByRole(this.state.links)
            })
        }
       
     
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
        const links = this.state.links;
        
        return (
            <Container as="nav">
                <MyMenu items={links} deleteUser={this.props.deleteUser}/>                
            </Container>
        );
    }
}

export default MyNav;