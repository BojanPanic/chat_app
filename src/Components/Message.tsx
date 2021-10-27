interface IProps {
  text: string;
  name?: string;
  date: string;
  color: string;
}

export const Message = (props: IProps) => {
  return (
    <div style={{ background: props.color }}>
      {props.name ? <div>{props.name}</div> : null}
      <div>{props.text}</div>
      <div>{props.date}</div>
    </div>
  );
};
