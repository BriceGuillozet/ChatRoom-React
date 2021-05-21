import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputField = ({
  inputName, inputValue, setFieldValue, ...props
}) => (
  <input
    {...props}
    name={inputName}
    value={inputValue}
    onChange={(evt) => setFieldValue(evt.target.value)}
  />
);

InputField.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  setFieldValue: PropTypes.func,
};

InputField.defaultProps = {
  inputValue: '',
  setFieldValue: () => {},
};

export default InputField;
