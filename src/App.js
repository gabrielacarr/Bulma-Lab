import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropsExample from './components/PropsExample';
import FormField from './components/FormField';

function App() {
  return (
    <div className="App">
   
  
    <Navbar />
    <PropsExample studentName="Hugo" teacherName ="Juan" />
    <FormField/>

    </div>
  );
}

export default App;
