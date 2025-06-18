import react, { useState } from 'react';
import './App.css';

function App() {
  //creating the state variables for first, middle and last name
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  //creating the variable to hold the message
  const message = `Hello, ${firstName} ${middleName} ${lastName}`.trim() || 
  "Hello, friend! Welcome to the app";

  return (
    //the main container div with a class bane used for styling, 
    // then display the {message} using the variable created above 
    <div className="app-contianer">
      <h1>{message}</h1>
      
      <div className="form-wrapper">
        {/* Form to collect full name from the user */}
          {/* Input for first name */}
          <input 
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)} //update state on change
          />

          {/* Input for middle name */}
          <input 
          type='text'
          placeholder='Middle Name'
          value={middleName}
          onChange={(e) => setMiddleName(e.currentTarget.value)} //update state on change
          />

          {/* Input for last name */}
          <input 
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)} //update state on change
          />


      </div>
    </div>
  );
}

export default App;
