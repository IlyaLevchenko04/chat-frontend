import { useEffect, useState } from 'react';
import { socket } from '../src/shared/utils/socket';
import { useAppDispatch, useAppSelector } from './shared/hooks/redux';
import { addNewMessage, setMessages } from './redux/messages-slice';

function App() {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(state => state.messages.messages);
  const [user, setUser] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    socket.connect();

    socket.on('initial_messages', initialMessages => {
      dispatch(setMessages(initialMessages));
    });

    socket.on('new_message', newMessage => {
      dispatch(addNewMessage(newMessage));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  const sendMessage = () => {
    if (!user || !text) return;

    socket.emit('new_message', { user, text });

    setText('');
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <input
          type="text"
          className="text-black"
          placeholder="Your name"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
