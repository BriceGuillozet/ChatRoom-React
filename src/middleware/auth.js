import {
  SEND_LOGIN,
  setPseudo,
  // SET_PSEUDO,
  // setColor,
} from 'src/actions';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  const { settings: { email, password } } = store.getState();
  switch (action.type) {
    case SEND_LOGIN:
      axios.post('/login', {
        email,
        password,
      }).then((res) => {
        store.dispatch(setPseudo(res.data.pseudo));
      });
      next(action);
      break;
    // case SET_PSEUDO:
    //   axios.get(`/theme/${email}`)
    //     .then((res) => {
    //       store.dispatch(setColor(res.data.color));
    //     });
    //   next(action);
    //   break;
    default:
      next(action);
      break;
  }
};
