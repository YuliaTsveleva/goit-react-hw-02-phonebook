import React, { Component } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const alreadyExist = this.state.contacts.find(
      contact => contact.name === name,
    );

    if (!alreadyExist) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else alert(`${name}is already in contacts`);
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div className="App">
        <Section title="Phonebook">
          <AddContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList contacts={filteredContacts}></ContactList>
        </Section>
      </div>
    );
  }
}

export default App;
