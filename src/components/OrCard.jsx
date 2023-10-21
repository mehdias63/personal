import React from 'react'

export default function OrCard({text , titel , icon}) {
  return (
    <div>
        <p>{text}</p>
        <h1>{titel}</h1>
        <span>{icon}</span>
    </div>
  )
}
