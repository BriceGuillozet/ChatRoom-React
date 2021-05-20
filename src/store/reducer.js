const INITIAL_STATE = {
  currentMessage: '',
  messages: [{
    id: 1,
    author: 'Minus',
    message: "Qu'est ce qu'on va faire ce soir Cortex ?",
    isOther: true,
  },
  {
    id: 2,
    author: 'Cortex',
    message: 'Comme tous les soirs Minus...',
    isOther: false,
  },
  {
    id: 3,
    author: 'Cortex',
    message: 'Tenter des conquérir le monde !',
    isOther: false,
  }],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
