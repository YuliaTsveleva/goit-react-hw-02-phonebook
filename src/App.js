import React, { Component } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
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
    const alreadyExist = this.state.contacts.find(
      contact => contact.name === name,
    );

    if (!alreadyExist && name !== '' && number !== '') {
      this.setState(({ contacts }) => ({
        contacts: [{ id: nanoid(), name, number }, ...contacts],
      }));
    } else if (name === '' || number === '') {
      alert('Fill in all the fields please!');
    } else if (alreadyExist) {
      alert(`${name} is already in contacts`);
    }
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="App">
        <Section title="Phonebook">
          <AddContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onClick={this.removeContact}
          ></ContactList>
        </Section>
      </div>
    );
  }
}

export default App;
