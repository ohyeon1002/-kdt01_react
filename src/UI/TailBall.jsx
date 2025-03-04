import React from 'react'

export default function TailBall({value, colorTag}) {
    console.log(value);
    console.log(colorTag);
  return (
    <div className='w-16 h-16 rounded-full bg-amber-700
                    flex justify-center items-center
                    text-white text-2xl font-bold'>
      {value}
    </div>
  )
}
