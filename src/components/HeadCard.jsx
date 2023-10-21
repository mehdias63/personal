import React from 'react'

export default function HeadCard({titel , id}) {
  return (
    <li><a href={`#${id}`}> {titel} </a></li>
  )
}
