import React from 'react';

import './styles.scss';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

const ChatRoom = () => (
  <div className="chatRoom">
    <Messages />
    <Form />
  </div>
);

export default ChatRoom;
