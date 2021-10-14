import { useState } from "react";

import { Dropdown } from "./components/Dropdown";
import "./styles.css";

export function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}
