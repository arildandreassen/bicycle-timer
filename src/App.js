import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    const url =
      "https://c6cmtlha3k.execute-api.us-west-1.amazonaws.com/default/genericTemplate";
    fetch(url, {
      method: "get",
      headers: {
        "x-api-key": "SCKlRrGrBh6xhzQeOurTR1vVmeTMgY5vaDIb1udR",
      },
    })
      .then((response) => response.json())
      .then((data) => setValue(data));
  });

  return (
    <div className="App">
      <header className="App-header">This is the app {value}</header>
    </div>
  );
}

export default App;
