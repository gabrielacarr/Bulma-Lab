import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <FormField label="Name" type="text" placeholder="e.g Gabriela"/>
                <FormField label="Email" type="email" placeholder="e.g gabrielae@gmail.com"/>
                <FormField label="Password" type="password" placeholder="e.g 1234J5"/>

                <CoolButton style="is-success button" text="submit" />  // genrates a button for submission
                
            </div>
        );
    }
}

export default Signup;