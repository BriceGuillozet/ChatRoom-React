import {
  SET_MESSAGE_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  SET_FIELD_VALUE,
  SEND_LOGIN,
  SET_PSEUDO,
  // SET_COLOR,
} from 'src/actions';
// import { getHighestId } from 'src/selector';

const INITIAL_STATE = {
  settings: {
    open: false,
    email: '',
    password: '',
    loading: false,
  },
  currentMessage: '',
  pseudo: 'Me',
  color: null,
  messages: [],
  // messages: [{
  // //   id: 1,
  // //   author: 'Minus',
  // //   message: "Qu'est ce qu'on va faire ce soir Cortex ?",
  // // },
  // // {
  // //   id: 2,
  // //   author: 'Me',
  // //   message: 'Comme tous les soirs Minus...',
  // // },
  // // {
  // //   id: 3,
  // //   author: 'Me',
  // //   message: 'Tenter des conquérir le monde !',
  // }],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGE_VALUE:
      return {
        ...state,
        currentMessage: action.inputValue,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: action.id,
            author: action.author,
            message: action.message,
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
    case SEND_LOGIN:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: true,
        },
      };
    case SET_PSEUDO:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: false,
          open: false,
        },
        pseudo: action.pseudo,
      };
    // case SET_COLOR:
    //   return {
    //     ...state,
    //     color: action.color,
    //   };
    default:
      return state;
  }
};

export default reducer;
