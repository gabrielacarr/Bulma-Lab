import React, { Component } from 'react';

class CoolButton extends Component {
    render() {
        console.log(this)
        return (
            <div>
            <button class={this.props.style} > {this.props.text}</button> 
            </div>
        );
    }
}

export default CoolButton;