import { useState } from "react";
import { ChatBox } from "./Components/ChatBox";
import { UsernameSelect } from "./Components/UsernameSelect";

function App() {
  const [username, setUsername] = useState<string>("");

  return <div>{username ? <ChatBox /> : <UsernameSelect />}</div>;
}

export default App;
