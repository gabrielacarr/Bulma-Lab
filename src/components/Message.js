import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <article class="message">
            <div class="message-header">
            <p>{this.props.title}</p>
            <button class="delete" aria-label="delete"></button>                
            </div>
            <div class="message-body">
            {this.props.children}
            </div>
            </article>
        );
    }
}

export default Message;


// const Message = (props) => {
//     return (
//       <div className="message">
//         <label className="message-header">{props.label}</label>
//         <div className="message-body">
//         <button class="delete" aria-label="delete"></button> 
//           />
//         </div>
//       </div>
//     );
//   };
//   export default Message;
  