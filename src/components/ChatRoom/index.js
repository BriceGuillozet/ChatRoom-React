import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import { wsConnect } from 'src/actions/';

const ChatRoom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div className="chatroom">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
};

export default ChatRoom;
