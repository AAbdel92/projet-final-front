import React, { Component } from 'react';
import axios from "axios";
import {Container, Divider, Header, Grid, Select} from "semantic-ui-react";
import ModalForReading from "../ReadingPage/ModalForReading/ModalForReading.js";

class ConclusionsEditingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diaries : [],
            users : [],
            usersSelect : null
            
        }
    }
    

    componentWillMount() {
        this.getDiaries();
    }

    getDiaries = () => {
        const self = this;
        const userRole = this.props.user.role.name;
        const promoId = this.props.user.promo.id;
        axios.get("/api/diaries?userRole="
            + userRole
            + "&questions=true"
            + "&promoId="
            + promoId)
            .then((response) => {
                self.setState({
                    diaries: response.data
                })
            })
    }

    getUsers = (diary) => {
        const self = this;
        const promoId = this.props.user.promo.id;
        const diaryId = diary.id;
        axios.get("/api/users?promoId="
        + promoId
        + "&diaryId="
        + diaryId)
        .then((response) => {
            self.setState({
                users : response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })

    }

    setDiariesSelect = () => {
        let content;
        let options = []
        this.state.diaries.map(
            diary => (
                options.push({key : diary.id, text: diary.name, value: diary.id})
            )
        )

        content = <Select
            placeholder="Veuillez choisir un carnet"
            options={options}
            onChange={this.handleChange}
        />
        return content;
    }

    handleChange = (event, select) => {
        let content;
        this.state.diaries.map(
            (diary, index) => {
                if (diary.id === select.value) {
                    this.getUsers(diary), () => {
                        
                        let options = []
                        this.state.users.map(
                            user => (
                                options.push({ key: user.id, text: user.firstname, value: user.id })
                            )
                        )
                        content = <Select
                                    placeholder="Veuillez séléctionner un apprenant"
                                    options={options}
                                />
                    }
                }
            }
        ), () => {
            console.log(content)
            this.setState({
            usersSelect : content
        })

        }

        
    }

    render() {
        console.log(this.state)
        return (
            <Container as="main" text>
                <Divider className="test" section />
                <Header textAlign='center' as="h1">
                    Finalisation des carnets de bord
                </Header>
                <Divider className="test" section />
                <Grid doubling centered columns={3} divided="vertically">
                    <Grid.Row>
                        <Grid.Column>
                            {this.setDiariesSelect()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        {this.state.usersSelect}
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default ConclusionsEditingPage;