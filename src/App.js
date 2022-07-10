import './App.css';
import React from 'react';
import Title from './Components/Title';
import Main from './Components/Main'
import Image from './Components/Image';
import Nav from './Components/Nav'
import Video from './Components/Video';
import About from './Components/About';
import Contact from './Components/Contact';
import Line from './Components/Line';
import Form from './Components/Form';
import SignUp from './Components/SignUp'


function App() {

  return (
    
    <div className="App">
      <Nav />
      <Image />
      <Title />
      
      <Main />
      <About />
      <Line />
      <Video />
      <Line />
      <Contact />
      <Line />
      <Form />
      <Line />
      <SignUp />
      <Line />
     
    </div>
  );
}

export default App;
