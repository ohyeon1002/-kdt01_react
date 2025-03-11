import React from 'react'

export default function TailButton({msg, cn, action}) {
  return (
    <button className={cn} onClick={action}>
        {msg}
    </button>
  )
}
