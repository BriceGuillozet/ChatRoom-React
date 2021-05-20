import React from 'react';

import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/components/Form';

const ChatRoom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

export default ChatRoom;
