import React from 'react'

export default function Card({titel , text}) {
  return (
    <div>
        <h1>{titel}</h1>
        <p>{text}</p>
    </div>
  )
}
