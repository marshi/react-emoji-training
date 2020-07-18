import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiResult from "./EmojiResults";

function App() {
  return (
    <div>
      <EmojiResult emojiData={["2", "3"]}/>
    </div>
  )
}

export default App;
