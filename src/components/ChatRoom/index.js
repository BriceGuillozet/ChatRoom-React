import React from 'react';

import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

const ChatRoom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
    <Settings />
  </div>
);

export default ChatRoom;
