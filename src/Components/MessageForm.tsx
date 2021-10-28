import { useState } from "react";

interface IProps {
  sendMessage: (message: string) => void;
}

export const MessageForm = (props: IProps) => {
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    props.sendMessage(message);
  };

  return (
    <div className="message-form-wrap">
      <div className="message-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Message"
            className="message-input"
            value={message}
            autoFocus
          />
          <button type="submit" className="message-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
