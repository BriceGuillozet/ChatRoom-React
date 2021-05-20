import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

import './styles.scss';

const Form = ({ inputValue }) => (
  <form className="form">
    <input
      type="text"
      className="form__input"
      value={inputValue}
      placeholder="Saisissez votre message"
    />
    <button type="submit" className="form__submit">
      <Send size={32} />
    </button>
  </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default Form;
