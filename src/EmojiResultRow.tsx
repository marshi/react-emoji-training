import React from "react";

type Props = {
  title: string,
  symbol: string
}

export default function EmojiResultRow(props: Props) {

  const codePointHex = props.symbol.codePointAt(0)?.toString(16)
  const src = `http://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

  return (
    <div>
      <img src={src}/>
      <span>{props.title}</span>
    </div>
  )
}