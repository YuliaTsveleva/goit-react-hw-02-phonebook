import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

function ContactList({ contacts }) {
  return (
    <ul className={s.friendList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
