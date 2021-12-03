import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Section from './Components/Section/Section';
import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactList from './Components/ContactList/ContactList';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div className="App">
        <Section title="Phonebook">
          <AddContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts}></ContactList>
        </Section>
      </div>
    );
  }
}

export default App;

ContactList.propTypes = {
  contacts: PropTypes.array,
};
