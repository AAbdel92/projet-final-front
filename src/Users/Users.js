import React, {Component} from "react";
import axios from "axios";
import {Container, Header, Card, Button, Divider} from "semantic-ui-react";

class Users extends Component {

    componentWillMount() {
        this.state = {
            users : []            
        }
        const componentInstance = this;
        axios.get("api/utilisateur/listeUtilisateur")
        .then( (response) => {
            componentInstance.setState({
                users: response.data
            })
        })
        .catch( (error) => {
            console.log(error)
        });
    }

    changerTitre = () => {
        this.props.titre(this.props.name);
    }    

    render() {
        return(
            <Container as="main" textAlign="center">
                <Divider hidden />
                <Header>{this.props.name}</Header>
                <Divider />
                {
                    this.state.users.map(
                    (user) => <Card 
                                        image="https://d13yacurqjgara.cloudfront.net/users/791595/screenshots/2346542/user-police_1x.png"
                                        key={user.id}
                                        header={user.pseudo}
                                        description={user.roles.map(
                                            (role) => role.nom + " "
                                        )}
                                    />
                    )
                }
                <Button onClick={this.changerTitre}>Change le titre</Button>
            </Container>
        )
    };
}

export default Users;