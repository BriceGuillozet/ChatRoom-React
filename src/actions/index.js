// Actions types

export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const ADD_MESSAGE = 'ADD_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const SET_PSEUDO = 'SET_PSEUDO';
export const WS_CONNECT = 'WS_CONNECT';
// export const SET_COLOR = 'SET_COLOR';

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
 * Ajoute un nouveau message au tableau des messages
 */
export const addMessage = (id, author, message) => ({
  type: ADD_MESSAGE,
  id,
  author,
  message,
});

/**
 * Ouvre ou ferme la fenetre de settings
 */
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

/**
 * Change la valeur d'un champ, du moment où il est dans settings
 */
export const setFieldValue = (fieldName, value) => ({
  type: SET_FIELD_VALUE,
  fieldName,
  value,
});

/**
 * Intention de connexion
 */
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

/**
 * Met à jour le pseudo
 */
export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  pseudo,
});

// /**
//  * Met à jour la couleur des messages
//  */
// export const setColor = (color) => ({
//   type: SET_COLOR,
//   color,
// });

/**
 * Connexion WebSocket serveur socket.io
 */
export const wsConnect = () => ({
  type: WS_CONNECT,
});
