import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropsExample from './components/PropsExample';
import FormField from './components/FormField';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
   <Navbar />
   <PropsExample studentName="Brie" teacherName="Juan"/>
   <Message isInfo title="Hello World">
   Additional information text placed here regarding the message. <strong>Additional Information</strong>
   </Message>
   <FormField label="Name" type="text" placeholder="e.g Jane Doe"/>
   <FormField label="Email" type="email" placeholder="e.g JaneDoe@gmail.com"/>
   
       </div>
  );
}

export default App;
// update the .js to .jsx