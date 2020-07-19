import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiResult, {EmojiData} from "./EmojiResults";
import SearchInput from "./SearchInput";
import emojiList from "./emojiList.json"

function App() {

  const initialList = emojiList.slice(0, 20);
  const [state, setState] = useState(initialList)

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const message = event.target.value;
    if (message.length == 0) {
      return setState(initialList)
    }
    const filtered = filter(initialList, message, 20)
    setState(filtered)
    console.log(state)
  }

  return (
    <div>
      <SearchInput onChange={onChange}/>
      <EmojiResult emojis={state}/>
    </div>
  )
}

export default App;

function filter(emojiData: Array<EmojiData>, emoinput: string, limit: number): Array<EmojiData> {
  return emojiData.filter((value, index, array) => {
    if (value.title.toLowerCase().includes(emoinput)) {
      return true
    }
    if (value.keywords.includes(emoinput)) {
      return true
    }
    return false
  }).slice(0, limit)
}