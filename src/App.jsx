import { useState } from "react";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  const limit = 24;
  return (
    <div className="container">
      <div className="box">
        <input
          type="text"
          name=""
          value={name}
          maxLength={limit}
          onChange={(event) => setName(event.target.value)}
          id=""
        />
        <p>Olá meu nome é {name}</p>
      </div>
    </div>
  );
};

export default App;
