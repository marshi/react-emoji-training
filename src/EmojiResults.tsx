import React from "react";
import EmojiResultRow from "./EmojiResultRow";
import emojiList from "./emojiList.json"

type Props = {
  emojiData: Array<string>
}

export default function EmojiResults(props: Props) {

  return (
    <div>
      {emojiList.map(emojiData =>
        props.emojiData.map(emoji => <EmojiResultRow title={emojiData.title} symbol={emojiData.symbol}/>)
      )}
    </div>
  )
}