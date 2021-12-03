import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ name, number, onSubmit }) {
  return (
    <>
      <p className={s.Name}>{name}</p>
      <p className={s.Number}>{number}</p>
      <button type="submit" onSubmit={onSubmit}>
        Remove
      </button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
