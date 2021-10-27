import axios from "axios";
import { formatDate } from "helpers/helper";
import { useEffect, useState } from "react";
import { IMessage } from "types/types";
import { Message } from "./Message";

export const ChatBox = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const fetchMessages = async () => {
    const data: any = await axios({
      method: "GET",
      url: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?&limit=10&token=${process.env.REACT_APP_API_KEY}`,
    });
    console.log(data);
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

    setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      {messages.length &&
        messages.map((item: IMessage) => {
          return (
            <div>
              <Message
                text={item.message}
                color="#fff"
                name={item.author}
                date={formatDate(item.timestamp)}
              />
            </div>
          );
        })}
    </div>
  );
};
