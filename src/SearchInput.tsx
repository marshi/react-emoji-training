import React, {ChangeEvent} from "react";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput(props: Props) {
  return (
    <div>
      <input onChange={event => props.onChange(event)}/>
    </div>
  )
}