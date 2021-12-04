import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ id, name, number, onClick }) {
  return (
    <li key={id} className={s.Item}>
      <p className={s.Name}>{name}</p>
      <p className={s.Number}>{number}</p>
      <button type="button" onClick={() => onClick()} className={s.Button}>
        Remove
      </button>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
