import React, { Component } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import AddContactForm from './Components/AddContactForm/AddContactForm';

// import { nanoid } from 'nanoid';
// const id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
// console.log(id);

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div className="App">
        <Section title="Phonebook">
          <AddContactForm />
        </Section>
        <Section title="Contacts"></Section>
      </div>
    );
  }
}

export default App;
