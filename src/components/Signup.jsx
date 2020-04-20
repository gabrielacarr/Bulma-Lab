import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';

export default class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g John Doe"/>
                <FormField label="Email" type="email" placeholder="e.g johndoe@gmail.com"/>
                
                <FormField label="Password" type="password" placeholder="e.g 1234J5"/>
                <FormField label="Submit" classProp="button is=small is-success" />
                
            </div>
        );
    }
}

