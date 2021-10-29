import { useState } from "react";
import arrow from "assets/arrow.svg";
import "styles/usernameSelect.scss";

interface IProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const UsernameSelect = (props: IProps) => {
  const [username, setUsername] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    username.length && props.setUsername(username);
  };

  return (
    <div className="username-select-wrap">
      <div className="username-select">
        <div className="username-select-title">
          <h1>Chat app</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter a username"
            className="username-select-input"
            value={username}
            autoFocus
          />
          <button type="submit" className="username-select-submit">
            <img alt="arrow" src={arrow} className="username-select-image" />
          </button>
        </form>
      </div>
    </div>
  );
};
