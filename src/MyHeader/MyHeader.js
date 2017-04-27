import React, { Component } from 'react';
import {Container, Image} from "semantic-ui-react";
import image from "../../public/logo-simplon.png";


class MyHeader extends Component {
    render() {
        return (
            <Container as="header">
                <Image
                    src={image}
                    centered
                />
            </Container>
        );
    }
}

export default MyHeader;