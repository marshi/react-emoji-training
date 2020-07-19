import React, {ChangeEvent} from "react";
import "./SearchInput.css"

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput(props: Props) {
  return (
    <div className="search-input">
      <input onChange={event => props.onChange(event)}/>
    </div>
  )
}