import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        className={s.FilterInput}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  contacts: PropTypes.string,
};
