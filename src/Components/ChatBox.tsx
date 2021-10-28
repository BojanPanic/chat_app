import axios from "axios";
import { formatDate } from "helpers/helper";
import { useEffect, useState } from "react";
import { IMessage } from "types/types";
import { Message } from "./Message";
import "styles/chatbox.scss";

interface IProps {
  username: string;
}

export const ChatBox = (props: IProps) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const isAuthorsMessage = (messageAuthor: string, username: string): boolean =>
    messageAuthor.toLowerCase() === username.toLowerCase();

  const fetchMessages = async () => {
    const data: any = await axios({
      method: "GET",
      url: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?&limit=10&token=${process.env.REACT_APP_API_KEY}`,
    });
    setMessages(data.data);
  };

  const sendMessage = async (message: IMessage) => {
    const data: any = await axios({
      method: "POST",
      url: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`,
      data: message,
      headers: {
        token: process.env.REACT_APP_API_KEY
          ? process.env.REACT_APP_API_KEY
          : "",
      },
    });

    //setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="chatbox-wrap">
      <div className="chatbox">
        {messages.length &&
          messages.map((item: IMessage) => {
            return (
              <div
                key={item._id}
                className={
                  isAuthorsMessage(item.author, props.username)
                    ? "author-message"
                    : ""
                }
              >
                <Message
                  text={item.message}
                  /* *TODO change to css class toggle  */
                  color={
                    item.author.toLowerCase() === props.username.toLowerCase()
                      ? "#fcf6c3"
                      : "#fff"
                  }
                  name={item.author}
                  date={formatDate(item.timestamp)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
