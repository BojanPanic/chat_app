import { useState } from "react";
import { ChatBox } from "Components/ChatBox";
import { UsernameSelect } from "Components/UsernameSelect";
import "fonts/fonts.scss";
import "styles/app.scss";

function App() {
  const [username, setUsername] = useState<string>("");

  return (
    <div className={"app-wrap"}>
      {username ? (
        <ChatBox username={username} />
      ) : (
        <UsernameSelect setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
