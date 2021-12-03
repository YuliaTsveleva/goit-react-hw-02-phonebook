import React, { Component } from 'react';
import s from './AddContactForm.module.css';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.Form}>
        <input
          value={name}
          onChange={this.handleChange}
          className={s.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          value={number}
          onChange={this.handleChange}
          className={s.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </form>
    );
  }
}

export default AddContactForm;
