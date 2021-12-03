import React, { Component } from 'react';
import s from './AddContactForm.module.css';
import CONFIG from '../../Data/inputConfig.json';
import { nanoid } from 'nanoid';
class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.Form}>
        {CONFIG.map(field => (
          <div key={field.name}>
            <label>{field.label}</label>
            <input
              id={nanoid()}
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
