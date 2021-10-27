import { Message } from "./Message";

export const ChatBox = () => {
  return (
    <div>
      <Message
        text="This is a message text, lorem ispum text"
        color="#fff"
        name="Author"
        date="10.10.2010"
      />
    </div>
  );
};
