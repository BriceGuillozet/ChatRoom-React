import React from 'react';

import './styles.scss';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

const ChatRoom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

export default ChatRoom;
