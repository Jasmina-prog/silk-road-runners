import React from 'react'

type PropsBtn = {
    name: string
}
export default function Button(props: PropsBtn) {
  return (
    <button className='bg-[#D89314] p-2 px-7 rounded-md'>{props.name}</button>
  )
}
