import "styles/message.scss";
interface IProps {
  text: string;
  name?: string;
  date: string;
  color: string;
}

export const Message = (props: IProps) => {
  return (
    <div style={{ background: props.color }} className="message-wrap">
      {props.name ? (
        <div className="message-light-text">{props.name}</div>
      ) : null}
      <div className="message-text">{props.text}</div>
      <div className="message-light-text">{props.date}</div>
    </div>
  );
};
