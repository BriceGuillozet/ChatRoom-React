import React from 'react';

import './styles.scss';

const Form = () => (
  <form className="form">
    <input
      type="text"
      className="form__input"
      placeholder="Saisissez votre message"
    />
    <button type="submit" className="form__submit">
      &gt;
    </button>
  </form>
);

export default Form;
