import { useState } from "react";
import { Cards } from "./components/Cards/Cards";

function App() {
  const [count] = useState(12);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Cards direction="row" count={count} />
    </div>
  );
}

export default App;
