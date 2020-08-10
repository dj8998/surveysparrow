import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import Chatbot from './Chatbot';
import Chaticon from './Chaticon';

function App() {
  return (
    <div  className="bg">
      <Navbar/>
      <Grid item xs={6} className= "mid">
          <h1> Where <br /> words<br /> fail,<br />Music<br /> speaks. </h1>
        </Grid>
      <Chaticon />
    </div>
  );
}

export default App;