import React from 'react'

export default function Keyword(props) {
  return (
    <span className='inline-flex rounded-full text-xs bg-gray-300 text-gray-500 p-1 m-1'>
      {props.keyword}
    </span>
  )
}
