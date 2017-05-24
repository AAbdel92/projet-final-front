import React, { Component } from 'react';
import {Container, Header, Divider, Card, Label, Grid, Modal, Popup} from "semantic-ui-react";
import axios from "axios";

class ReadingPage extends Component {

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
            axios.get("/api/diaries?consulter=true&promoId=" 
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
                    console.log(err);
                })
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Container as="main" text>
                <Divider className="test" section />                    
                <Header textAlign='center' as="h1">
                        Consultation des carnets de bord
                </Header>
                <Divider className="test" section />
                <Grid doubling centered columns={3} divided="vertically">
                    
                        {this.state.diaries.map(
                        diary => (
                            <Grid.Row>
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
                                        <Header>Conclusion</Header>
                                        {diary.conclusions[0].content}
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal> 
                        </Grid.Column>
                        <Grid.Column>
                            <Card key={diary.id} as="article" color="red">
                                <Card.Content>
                                    <Label  color='red' ribbon>{diary.name}</Label>                                
                                    <Card.Meta>
                                        Du {new Date(diary.startDate).toLocaleDateString()} au {new Date(diary.endDate).toLocaleDateString()}
                                    </Card.Meta>  
                                </Card.Content>                  
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card key={diary.id} as="article" color="red">
                                <Card.Content>
                                    <Label  color='red' ribbon>{diary.name}</Label>                                
                                    <Card.Meta>
                                        Du {new Date(diary.startDate).toLocaleDateString()} au {new Date(diary.endDate).toLocaleDateString()}
                                    </Card.Meta>  
                                </Card.Content>                  
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card key={diary.id} as="article" color="red">
                                <Card.Content>
                                    <Label  color='red' ribbon>{diary.name}</Label>                                
                                    <Card.Meta>
                                        Du {new Date(diary.startDate).toLocaleDateString()} au {new Date(diary.endDate).toLocaleDateString()}
                                    </Card.Meta>  
                                </Card.Content>                  
                            </Card>
                        </Grid.Column>
                         <Grid.Column>
                            <Card key={diary.id} as="article" color="red">
                                <Card.Content>
                                    <Label  color='red' ribbon>{diary.name}</Label>                                
                                    <Card.Meta>
                                        Du {new Date(diary.startDate).toLocaleDateString()} au {new Date(diary.endDate).toLocaleDateString()}
                                    </Card.Meta>  
                                </Card.Content>                  
                            </Card>
                        </Grid.Column>
                         <Grid.Column>
                            <Card key={diary.id} as="article" color="red">
                                <Card.Content>
                                    <Label  color='red' ribbon>{diary.name}</Label>                                
                                    <Card.Meta>
                                        Du {new Date(diary.startDate).toLocaleDateString()} au {new Date(diary.endDate).toLocaleDateString()}
                                    </Card.Meta>  
                                </Card.Content>                  
                            </Card>
                        </Grid.Column>
                         <Grid.Column>
                            <Card key={diary.id} as="article" color="red">
                                <Card.Content>
                                    <Label  color='red' ribbon>{diary.name}</Label>                                
                                    <Card.Meta>
                                        Du {new Date(diary.startDate).toLocaleDateString()} au {new Date(diary.endDate).toLocaleDateString()}
                                    </Card.Meta>  
                                </Card.Content>                  
                            </Card>
                        </Grid.Column>
                        </Grid.Row>                        
                    )
                )}                                          
                                        
                                        
                </Grid>
            </Container>
        );
    }
}

export default ReadingPage;