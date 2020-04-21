import React, { Component } from 'react';

class PropsExample extends Component {
    render() {
        let str = `Hello ${this.props.studentName}`
        return (
            <div>
                Hi {this.props.studentName}
                {`Hola ${this.props.studentName}`}
                {str}
                {this.props.teacherName}
            </div>
        );
    }
}
// function funcName(param1, param2){}
export default PropsExample;