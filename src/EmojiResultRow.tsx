import React from "react";

import "./EmojiResults.css"

type Props = {
  title: string,
  symbol: string,
  keywords: string
}

export default function EmojiResultRow(props: Props) {

  const codePointHex = props.symbol.codePointAt(0)?.toString(16)
  const src = `https://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

  return (
    <div className="emoji-result-row">
      <img src={src}/>
      <span className="title">{props.title}</span>
    </div>
  )
}