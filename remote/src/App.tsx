import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header" data-e2e="REMOTE_COMPONENT_INFO">
        Remote Application
        <Card></Card>
      </header>
    </div>
  );
}

export default App;
