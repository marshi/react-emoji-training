import React from "react";
import EmojiResultRow from "./EmojiResultRow";
import emojiList from "./emojiList.json"

export type EmojiData = {
  title: string,
  symbol: string,
  keywords: string
}

type Props = {
  emojis: Array<EmojiData>
}

export default function EmojiResults(props: Props) {

  return (
    <div>
      {props.emojis.map(emojiData =>
        <EmojiResultRow
          key={emojiData.title}
          title={emojiData.title}
          symbol={emojiData.symbol}
          keywords={emojiData.keywords}
        />
      )}
    </div>
  )
}