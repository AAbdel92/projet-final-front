import React, { Component } from 'react';
import {Container, Header} from "semantic-ui-react";
import Users from "./Users/Users.js";

class AdminPage extends Component {
    render() {
        return (
            <Container>
                <Header as="h1">
                    {this.props.name}
                </Header>
                <Users />
            </Container>
        );
    }
}

export default AdminPage;