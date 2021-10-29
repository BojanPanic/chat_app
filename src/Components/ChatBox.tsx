import axios from "axios";
import { formatDate, scrollTo } from "helpers/helper";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "types/types";
import { Message } from "./Message";
import "styles/chatbox.scss";
import { MessageForm } from "./MessageForm";

interface IProps {
  username: string;
}

//Timestamp of current date - 1 day
const timestampYesterday: number = new Date().valueOf() - 3600 * 1000 * 24;

export const ChatBox = (props: IProps) => {
  const chatboxRef = useRef(null);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const isAuthorsMessage = (messageAuthor: string, username: string): boolean =>
    messageAuthor.toLowerCase() === username.toLowerCase();

  const fetchMessages = async () => {
    try {
      const data: any = await axios({
        method: "GET",
        url: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?since=${timestampYesterday}&token=${process.env.REACT_APP_API_KEY}`,
      });
      setMessages(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = async (message: string) => {
    try {
      const data: any = await axios({
        method: "POST",
        url: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`,
        data: { message, author: props.username },
        headers: {
          token: process.env.REACT_APP_API_KEY
            ? process.env.REACT_APP_API_KEY
            : "",
        },
      });
      setMessages([...messages, data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (messages.length) {
      scrollTo(chatboxRef);
    }
  }, [messages]);

  return (
    <div className="chatbox-wrap">
      <div className="chatbox">
        <div className="chatbox-messages">
          {messages.length
            ? messages.map((item: IMessage) => {
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
                      color={
                        item.author.toLowerCase() ===
                        props.username.toLowerCase()
                          ? "#fcf6c3"
                          : "#fff"
                      }
                      name={
                        isAuthorsMessage(item.author, props.username)
                          ? ""
                          : item.author
                      }
                      date={formatDate(item.timestamp)}
                    />
                  </div>
                );
              })
            : null}
        </div>
        <div ref={chatboxRef}></div>
      </div>
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
};
