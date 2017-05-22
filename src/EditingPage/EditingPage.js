import React, { Component } from 'react';
import {Container, Divider, Header, Grid, Label, Card, Modal, Popup, TextArea, Button} from "semantic-ui-react";
import axios from "axios";

class EditingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diaries : []            
        }
    }
    

    componentWillMount() {
        if (!this.props.loggedIn) {
           this.props.redirect();
        } else {
            const self = this;
            axios.get("http://localhost:8080/api/diaries?promoId="
                + self.props.user.promo.id
                + "&studentId="
                + self.props.user.id
                + "&userRole="
                + self.props.user.role.name)
            .then(function (response) {
                self.setState({
                    diaries : response.data
                })
            })
            .catch(function (err) {
                console.log(err)
            })
        }  
    }

    handleChange = () => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    sendAnswers = () => {
        const self = this;
        axios.post("http://localhost:8080");
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    
    render() {

        let answers = [
            "firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer", "fifthAnswer"
        ];
        let inputId = 0;
        return (
            <Container as="main" text>
                <Divider section />                    
                <Header textAlign='center' as="h1">
                        Edition des carnets de bord
                </Header>
                <Divider section />
                <Grid doubling columns={3} divided="vertically">
                    {this.state.diaries.map(
                        diary => (
                            <Grid.Column>                            
                            <Modal dimmer="blurring" key={diary.id} trigger={
                                                                
                                <Card as="article" color="red">
                                    <Popup  trigger={
                                                <Card.Content>                                                    
                                                    <Label  color='red' ribbon>{diary.name}</Label>                                                                                    
                                                    <Card.Meta>
                                                        Du {new Date(diary.startDate).toLocaleDateString()} au {new Date(diary.endDate).toLocaleDateString()}
                                                    </Card.Meta>  
                                                </Card.Content>
                                            }
                                            content="blabla"
                                    />                  
                                </Card>                                                                
                            }>
                            
                                <Label tag size="big" color='red'>{diary.name}</Label>                                
                                <Modal.Content>                                  
                                    <Modal.Description>
                                        <Header>Introduction</Header>                                        
                                        {diary.introduction}
                                    </Modal.Description>
                                    <Divider section />
                                    <Modal.Description>
                                        <Grid centered columns={2}>
                                            <Grid.Row >
                                                <Grid.Column textAlign="center">
                                                    <Header>Questions</Header>
                                                </Grid.Column>
                                                <Grid.Column textAlign="center">
                                                    <Header>Réponses</Header>
                                                </Grid.Column>
                                            </Grid.Row>                                                                                                                                       
                                        {   
                                            diary.questions.map(
                                            question => (
                                                <Grid.Row verticalAlign>                                                    
                                                    <Grid.Column textAlign="justified">
                                                        {question.content}                                                        
                                                    </Grid.Column>                                                   
                                                    <Grid.Column stretched>
                                                        <TextArea
                                                            name={question.id}
                                                            key={question.id}
                                                            autoHeight
                                                            value={question.id.value}
                                                            onChange={this.handleChange}                                                            
                                                        />                                                        
                                                    </Grid.Column>                                                        
                                                </Grid.Row>
                                            ),
                                            inputId++
                                        )

                                        }
                                        <Grid.Row columns={1}>
                                            <Button onClick={this.sendAnswers} positive>
                                                Valider
                                            </Button>
                                        </Grid.Row>
                                        </Grid>
                                    </Modal.Description>                                    
                                </Modal.Content>
                            </Modal> 
                        </Grid.Column>
                        )
                    )}
                </Grid >
            </Container>
        );
    }
}

export default EditingPage;