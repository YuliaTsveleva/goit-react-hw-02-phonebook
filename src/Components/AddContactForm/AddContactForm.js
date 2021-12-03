import React, { Component } from 'react';
import s from './AddContactForm.module.css';
import CONFIG from '../../Data/inputConfig.json';
class AddContactForm extends Component {
  constructor() {
    super();
    this.state = {};
    CONFIG.forEach(field => {
      this.state[field.name] = '';
    });
  }

  //     state = {
  //     name: '',
  //     number: '',
  //   };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className={s.Form}>
        {CONFIG.map(field => (
          <div key={field.name}>
            <label>{field.label}</label>
            <input
              value={this.state[field.name]}
              onChange={this.handleChange}
              className={s.Input}
              type={field.type}
              name={field.name}
              pattern={field.pattern}
              title={field.title}
              required
            />
          </div>
        ))}
        <button type="submit" onClick={this.handleSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

export default AddContactForm;

{
  /* <label>Name</label> */
  /* <input
          value={name}
          onChange={this.handleChange}
          className={s.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          value={number}
          onChange={this.handleChange}
          className={s.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /> */
}
