import React from 'react';
import TopBar from './components/TopBar';
import Game from "./components/Game";
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
