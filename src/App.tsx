import React, {ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiResult from "./EmojiResults";
import SearchInput from "./SearchInput";

function App() {

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  return (
    <div>
      <SearchInput onChange={onChange}/>
      <EmojiResult emojiData={["2", "3"]}/>
    </div>
  )
}

export default App;
