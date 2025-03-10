import { useEffect, useState } from "react";
import { socket } from "@shared/services/socket";
import { useAppDispatch, useAppSelector } from "@shared/hooks/redux";
import { addNewMessage, setMessages } from "@redux/messages-slice";
import { MessageCard } from "@shared/components/message";
import { ROUTER_BOOK } from "@shared/constants/router-book";

function Home() {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.messages.messages);
  const userInfo = useAppSelector((state) => state.user.user);
  const [text, setText] = useState<string>("");

  const isCardsExists = messages.length > 0;

  useEffect(() => {
    socket.connect();

    socket.on("initial_messages", (initialMessages) => {
      dispatch(setMessages(initialMessages));
    });

    socket.on("new_message", (newMessage) => {
      dispatch(addNewMessage(newMessage));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInfo || !text) return;

    socket.emit("new_message", { user: userInfo?.name, text });

    setText("");
  };

  return (
    <div className="p-[16px]">
      <div className="grid tablet:grid-cols-[0.7fr_1.3fr] gap-[24px]">
        <form
          className="flex flex-col gap-4 p-4 w-full max-w-md border border-gray-300 rounded-xl bg-white shadow-sm"
          onSubmit={sendMessage}
        >
          <h2 className="font-semibold text-lg">Chat App</h2>

          {/* Message Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Type a message</label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your message"
              rows={3}
            />
          </div>

          {/* Send Button */}
          <button className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
            Send
          </button>
        </form>

        <div>
          {isCardsExists ? (
            userInfo ? (
              <div className="grid gap-[16px]">
                {messages.map((message) => (
                  <MessageCard key={message._id} {...message} />
                ))}
              </div>
            ) : (
              <div className="absolute inset-0 backdrop-blur-md bg-white/40 flex items-center justify-center">
                <p className="text-lg font-semibold text-gray-700">
                  Please <a href={ROUTER_BOOK.login}>sign in</a> to chat
                </p>
              </div>
            )
          ) : (
            <div>Chat is empty</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
