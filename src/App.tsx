import { useState } from "react";
import { ChatBox } from "components/ChatBox";
import { UsernameSelect } from "components/UsernameSelect";
import "fonts/fonts.scss";
import "styles/app.scss";

function App() {
  const [username, setUsername] = useState<string>("");

  return (
    <div className={"app-wrap"}>
      {username ? <ChatBox /> : <UsernameSelect setUsername={setUsername} />}
    </div>
  );
}

export default App;
