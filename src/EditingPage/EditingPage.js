import React, { Component } from 'react';

class EditingPage extends Component {

    componentWillMount() {
        if (!this.props.loggedIn) {
           this.props.redirect();
        }
    }
    
    render() {
        return (
            <div>
                EditingPage
            </div>
        );
    }
}

export default EditingPage;