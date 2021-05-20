import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

import './styles.scss';

const Form = ({ inputValue, setMessageValue, sendNewMessage }) => {
  const inputRef = useRef(null);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    sendNewMessage();
  };

  const handleOnInputChange = (evt) => {
    setMessageValue(evt.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="form__input"
        value={inputValue}
        onChange={handleOnInputChange}
        placeholder="Saisissez votre message"
        ref={inputRef}
      />
      <button type="submit" className="form__submit">
        <Send size={32} />
      </button>
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string,
  setMessageValue: PropTypes.func,
  sendNewMessage: PropTypes.func,
};

Form.defaultProps = {
  inputValue: '',
  setMessageValue: () => {},
  sendNewMessage: () => {},
};

export default Form;
