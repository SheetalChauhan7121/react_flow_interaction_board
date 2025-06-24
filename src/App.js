import React from "react";
import "./styles.css"; 
import FlowCanvas from "./components/FlowCanvas";
import BlockPanel from "./components/BlockPanel";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <FlowCanvas />
      <BlockPanel />
    </div>
  );
};

export default App;
