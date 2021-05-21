import { SET_MESSAGE_VALUE, SEND_NEW_MESSAGE } from 'src/actions';
import { getHighestId } from 'src/selector';

const INITIAL_STATE = {
  currentMessage: '',
  pseudo: 'Me',
  messages: [{
    id: 1,
    author: 'Minus',
    message: "Qu'est ce qu'on va faire ce soir Cortex ?",
    isOther: true,
  },
  {
    id: 2,
    author: 'Me',
    message: 'Comme tous les soirs Minus...',
    isOther: false,
  },
  {
    id: 3,
    author: 'Me',
    message: 'Tenter des conquérir le monde !',
    isOther: false,
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
    default:
      return state;
  }
};

export default reducer;
