import React from 'react'

export default function TailButton({msg, cn}) {
  return (
    <button className={cn}>
        {msg}
    </button>
  )
}
