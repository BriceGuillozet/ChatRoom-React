import {
  SET_MESSAGE_VALUE,
  SEND_NEW_MESSAGE,
  TOGGLE_SETTINGS,
  SET_FIELD_VALUE,
} from 'src/actions';
import { getHighestId } from 'src/selector';

const INITIAL_STATE = {
  settings: {
    open: false,
    email: '',
    password: '',
  },
  currentMessage: '',
  pseudo: 'Me',
  messages: [{
    id: 1,
    author: 'Minus',
    message: "Qu'est ce qu'on va faire ce soir Cortex ?",
  },
  {
    id: 2,
    author: 'Me',
    message: 'Comme tous les soirs Minus...',
  },
  {
    id: 3,
    author: 'Me',
    message: 'Tenter des conquérir le monde !',
  }],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGE_VALUE:
      return {
        ...state,
        currentMessage: action.inputValue,
      };
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: (getHighestId(state.messages) + 1),
            author: state.pseudo,
            message: state.currentMessage,
            isOther: false,
          },
        ],
        currentMessage: '',
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          open: !state.settings.open,
        },
      };
    case SET_FIELD_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.fieldName]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
