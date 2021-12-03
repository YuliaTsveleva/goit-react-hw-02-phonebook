import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ name, number }) {
  return (
    <>
      <p className={s.Name}>{name}</p>
      <p className={s.Number}>{number}</p>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
