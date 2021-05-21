// Actions types

export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';

// Action creators
/**
 * Change la valeur de l'input
 * @param {string} inputValue
 */
export const setMessageValue = (inputValue) => ({
  type: SET_MESSAGE_VALUE,
  inputValue,
});

/**
 * Ajoute un nouveau message au tableau des messages
 */
export const sendNewMessage = () => ({
  type: SEND_NEW_MESSAGE,
});

/**
 * Ouvre ou ferme la fenetre de settings
 */
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

/**
 * Change la valeur de l'email
 */
export const setEmailValue = (value) => ({
  type: SET_EMAIL_VALUE,
  value,
});

/**
 * Change la valeur du password
 */
export const setPasswordValue = (value) => ({
  type: SET_PASSWORD_VALUE,
  value,
});
