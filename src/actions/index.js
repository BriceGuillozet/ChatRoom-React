// Actions

export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

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
