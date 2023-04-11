import React from 'react';
import './App.css';
import IntegratedList from './IntegratedList';

let first = [
  { uuid: 2, name: "Darling" },
  { uuid: 3, name: "Cry-Baby" },
  { uuid: 4, name: "Snitch" },
  { uuid: 5, name: "Pawn" }
];

let second = [
  { uuid: 1, role: "admin" },
  { uuid: 2, role: "contributor" },
  { uuid: 3, role: "owner" },
  { uuid: 4, role: "contributor" }
];

function App() {
  return (
    <div className="App">
      <IntegratedList first={first} second={second} />
    </div>
  );
}

export default App;
