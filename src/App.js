import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Hedgehogs from "./Components/Hedgehogs"

function App() {
  return (
    <div className="App">
      <body>
      <Header/>
      <div className="hedgehogs">
      <Hedgehogs/>
      </div>
      </body>
    </div>
  );
}

export default App;
