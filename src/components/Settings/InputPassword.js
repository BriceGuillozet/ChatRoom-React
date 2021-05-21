import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputPassword = ({ value, setPasswordValue }) => (
  <input
    type="password"
    autoComplete="new-password"
    placeholder="Mot de passe"
    value={value}
    onChange={(evt) => setPasswordValue(evt.target.value)}
  />
);

InputPassword.propTypes = {
  value: PropTypes.string,
  setPasswordValue: PropTypes.func,
};

InputPassword.defaultProps = {
  value: '',
  setPasswordValue: () => {},
};

export default InputPassword;
